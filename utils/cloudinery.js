import cloudinary from 'cloudinary'

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINERY_CLOUD_NAME,
  api_key: process.env.CLOUDINERY_API_KEY,
  api_secret: process.env.CLOUDINERY_SECRET
})

export default cloudinary
