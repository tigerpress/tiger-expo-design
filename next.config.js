/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
