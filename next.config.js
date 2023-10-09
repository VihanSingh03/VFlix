/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"**",
            },
        ],
        serverComponentsExternalPackages:['mongoose'],
    },
}

module.exports = nextConfig
