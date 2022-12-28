/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
  },

  images: {
    domains: [
      'picsum.photos',
      's.alamy.com',
      'cdn.jsdelivr.net',
      'sublime-staging-presentation.herokuapp.com',
      'setalkel.co',
    ],
  },
};
