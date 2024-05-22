/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // experimental: {
  //   serverActions: true
  // }
  images: {
    domains: ['fastly.picsum.photos']
    // loader: 'custom',
    // loaderFile: './loader.js'
  }
}

export default nextConfig
