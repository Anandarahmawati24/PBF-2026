/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //simple domain untuk avatar
    // domains digunakan untuk sumber gambar yang umum dan tidak perlu filtering
    domains: [
      "lh3.googleusercontent.com", // Google avatar
      "avatars.githubusercontent.com", // GitHub avatar
    ],
    //remote pattern untuk gambar produk
    // remotePatterns digunakan untuk sumber eksternal yang membutuhkan kontrol lebih detail
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hushpuppies.co.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1yutv2xslo29o.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig
