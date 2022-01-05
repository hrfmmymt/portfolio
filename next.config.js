/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  // experimental: {
  //   scrollRestoration: true,
  // },
  pwa: {
    dest: 'public',
  },
});
