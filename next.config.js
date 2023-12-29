/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['salon-server-orky.onrender.com','res.cloudinary.com','cloudinary.com'],
      },
      experimental: {
        esmExternals: "loose", 
        serverComponentsExternalPackages: ["mongoose"] 
      },
}

module.exports = nextConfig
