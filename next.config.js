/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["res.cloudinary.com", "instagram.feoh3-1.fna.fbcdn.net"],
    },
};
