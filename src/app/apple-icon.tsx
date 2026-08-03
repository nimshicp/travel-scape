import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1F16",
          borderRadius: 38,
          padding: 24,
          boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 12 18 C 30 16, 56 16, 72 30 A 34 34 0 1 1 16 42 C 15 34, 14 26, 12 18 Z"
            stroke="#34A853"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 22 47 L 76 47 C 82 47, 86 50, 89 56"
            stroke="#34A853"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
