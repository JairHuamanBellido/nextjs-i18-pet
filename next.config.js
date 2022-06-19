/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["temp-bucket-jair.s3.us-east-2.amazonaws.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
