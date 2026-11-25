import type { NextConfig } from "next";

const envAllowedHosts = [
  ...(process.env.NG_ALLOWED_HOSTS?.split(",")
    .map((h) => h.trim())
    .filter(Boolean) ?? []),
  ...(process.env.APP_URL
    ? (() => {
        try {
          return [new URL(process.env.APP_URL).hostname];
        } catch {
          return [];
        }
      })()
    : []),
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "**.run.app",
    "**.proxy.googlers.com",
    "**.usercontent.goog",
    "**.google.com",
    ...envAllowedHosts,
  ],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
