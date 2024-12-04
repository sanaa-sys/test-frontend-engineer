import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com'], // Add the domain here
    },
};

export default nextConfig;
