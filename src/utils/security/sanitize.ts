/**
 * Escapes characters that have special meaning in HTML to prevent XSS.
 * This is an essential OWASP best practice to prevent execution of user-controlled code.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Strips HTML tags, script tags, event handlers, and javascript: links to prevent injection.
 * Trims leading/trailing whitespace.
 */
export function sanitizeString(val: string): string {
  if (typeof val !== "string") return val;

  // 1. Remove dangerous blocks completely (scripts, iframes, style tags)
  let clean = val.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "");
  clean = clean.replace(/<iframe[^>]*>([\s\S]*?)<\/iframe>/gi, "");
  clean = clean.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, "");

  // 2. Remove inline HTML tags (while leaving content text)
  clean = clean.replace(/<\/?[a-z][^>]*>/gi, "");

  // 3. Remove javascript: links and event handlers (e.g. onload, onerror)
  clean = clean.replace(/javascript:/gi, "");
  clean = clean.replace(/\bon[a-z]+\s*=\s*(['"][^'"]*['"]|[^\s>]*)/gi, "");

  // 4. Escape special HTML characters to prevent XSS
  clean = escapeHtml(clean);

  return clean.trim();
}

/**
 * Recursively scans and sanitizes all string properties inside any object or array.
 * Ensures that nested payload structures are deeply sanitized before being stored/sent.
 */
export function sanitizeData<T>(data: T): T {
  if (typeof data === "string") {
    return sanitizeString(data) as unknown as T;
  }
  
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeData(item)) as unknown as T;
  }
  
  if (data !== null && typeof data === "object") {
    const sanitizedObj = {} as any;
    for (const key of Object.keys(data)) {
      sanitizedObj[key] = sanitizeData((data as any)[key]);
    }
    return sanitizedObj as T;
  }
  
  return data;
}
