import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '10mb' // Increase the size limit for file uploads
    }
  }
};

export default nextConfig;
