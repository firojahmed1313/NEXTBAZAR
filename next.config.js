/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir:true,
    },
    env:{
        DB_URL:"mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/NEXTBAZAR?retryWrites=true&w=majority",
        API_URL:"https://3000-mdfirojahmed-nextebazar-3rent4g91jw.ws-us107.gitpod.io"
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
