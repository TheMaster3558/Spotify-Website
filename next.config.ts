import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["i.scdn.co", "th.bing.com"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "i.scdn.co",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "th.bing.com",
                pathname: "**",
            }
        ]
    }
};

export default nextConfig;
