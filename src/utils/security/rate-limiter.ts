import { NextRequest, NextResponse } from "next/server";

interface RateLimitInfo {
  count: number;
  resetTime: number;
}

// In-memory store to track requests. 
// Uses IP address or user ID as keys.
const rateLimitStore = new Map<string, RateLimitInfo>();

// Simple cleanup mechanism to avoid memory leaks over time
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 1000 * 5); // Run cleanup every 5 minutes

interface RateLimitConfig {
  limit: number;      // Maximum requests allowed within the window
  windowMs: number;   // Window size in milliseconds
}

/**
 * Checks if the request should be rate limited.
 * Keyed by identifier (IP address or User ID).
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig
): {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const resetTime = now + config.windowMs;

  const currentRecord = rateLimitStore.get(key);

  // If no record exists or if the window has expired, start a new window
  if (!currentRecord || now > currentRecord.resetTime) {
    const newRecord = { count: 1, resetTime };
    rateLimitStore.set(key, newRecord);
    return {
      allowed: true,
      limit: config.limit,
      remaining: config.limit - 1,
      resetTime,
    };
  }

  // If request count is within limits, increment and allow
  if (currentRecord.count < config.limit) {
    currentRecord.count += 1;
    return {
      allowed: true,
      limit: config.limit,
      remaining: config.limit - currentRecord.count,
      resetTime: currentRecord.resetTime,
    };
  }

  // Rate limit exceeded
  return {
    allowed: false,
    limit: config.limit,
    remaining: 0,
    resetTime: currentRecord.resetTime,
  };
}

/**
 * Helper to extract client IP address from NextRequest
 */
export function getClientIp(req: NextRequest): string {
  // Check common headers used by proxies/reverse proxies (e.g. Vercel, Cloudflare)
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ips = forwardedFor.split(",").map((ip) => ip.trim());
    if (ips[0]) return ips[0];
  }
  
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;

  // Fallback to Next.js req.ip or localhost
  return (req as any).ip || "127.0.0.1";
}
