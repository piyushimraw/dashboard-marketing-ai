/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images: {
        remotePatterns:[
            {
                hostname: 'alnkar.s3.ap-south-1.amazonaws.com',
                protocol: 'https',
            }
        ]
    },
}

module.exports = nextConfig
