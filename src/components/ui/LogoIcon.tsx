import React from "react";

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function LogoIcon({ className = "w-6 h-6", ...props }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M 12 18 C 30 16, 56 16, 72 30 A 34 34 0 1 1 16 42 C 15 34, 14 26, 12 18 Z"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 22 47 L 76 47 C 82 47, 86 50, 89 56"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
