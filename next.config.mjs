/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'us-west-2.graphassets.com',
			},
		],
	},
}

export default nextConfig;
