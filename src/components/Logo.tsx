import React from "react";

interface LogoProps {
  className?: string;
  inverse?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = "", inverse = false, iconOnly = false }: LogoProps) {
  let src = "/logo-transparent.png";
  
  if (iconOnly) {
    src = inverse ? "/logo-icon-inverse.png" : "/logo-icon.png";
  } else {
    src = inverse ? "/logo-transparent-inverse.png" : "/logo-transparent.png";
  }

  return (
    <img
      src={src}
      alt="NeoKlicks Digitech Logo"
      className={`object-contain select-none transition-opacity duration-150 ${className}`}
      draggable={false}
    />
  );
}
