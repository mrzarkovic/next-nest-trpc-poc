const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    // experimental: {
    //     // this includes files from the monorepo base two directories up
    //     outputFileTracingRoot: path.join(__dirname, "../../"),
    // },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, context) => {
        if (process.env.NEXT_WEBPACK_USEPOLLING) {
            config.watchOptions = {
                poll: 500,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};

module.exports = nextConfig;
