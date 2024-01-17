/** @type {import('next').NextConfig} */

const nextConfig = {
    /*experimental:{
        appDir:true,
    },*/
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP']
    },
    env: {
        DB_URL: "mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/NEXTBAZAR?retryWrites=true&w=majority",
        API_URL: "https://3000-firojahmed131-nextbazar-dkc8p4kpghc.ws-us107.gitpod.io",
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
