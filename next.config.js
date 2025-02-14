/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://online-cinema-server-production-7284.up.railway.app/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://online-cinema-server-production-7284.up.railway.app/uploads/:path*`,
			},
		]
	},
	images: {
		domains: ['my-static-files.storage.yandexcloud.net'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'my-static-files.storage.yandexcloud.net',
			},
		],
	},
}

module.exports = nextConfig
