import * as dotenv from 'dotenv'
dotenv.config()

export const INDEX_ENDPOINT = '/'

export const DB_ACCESS = process.env.DB_ACCESS

export const SERVER_URL = process.env.SERVER_URL

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET

export const PORT = process.env.PORT

export const CLIENT_URL = process.env.CLIENT_URL

export const CLOUDINARY = Object.freeze({
    NAME: process.env.CLOUDINARY_CLOUD_NAME,
    KEY: process.env.CLOUDINARY_KEY,
    SECRET: process.env.CLOUDINARY_SECRET,
})

