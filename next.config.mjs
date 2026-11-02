/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep old .html URLs working (links shared before the Next.js migration)
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/project.html', destination: '/projects', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
