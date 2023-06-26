import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import express from 'express';
import { CLOUDINARY } from '../constants/variables.js';

const app = express();

cloudinary.config({
    cloud_name: CLOUDINARY.NAME,
    api_key: CLOUDINARY.KEY,
    api_secret: CLOUDINARY.SECRET
});

export const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'portfolio projects',
        // format: async (req, file) => {
        //     return ['jpeg', 'jpg', 'png']
        // },
    },
});

