/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	name: process.env.NAME,
	description: process.env.DESCRIPTION,
};

module.exports = nextConfig;
