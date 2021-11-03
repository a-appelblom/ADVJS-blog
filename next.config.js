/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://cdn.contentful.com",
      "https://images.ctfassets.net/",
      "images.ctfassets.net",
      "//images.ctfassets.net",
    ],
  },
};
