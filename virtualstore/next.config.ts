import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com'], // Add the domain here
    },
};

export default nextConfig;
