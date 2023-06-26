import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    images: [{
        // imageId: {
        //     type: String,
        //     required: true,
        // },
        path: {
            type: String,
            required: true,
        },
        originalname: {
            type: String,
            required: true,
        },
        mimetype: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
    }],
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        // required: true,
        trim: true
    },
    online: {
        type: Boolean,
        // required: true,
    }
},
    {
        timestamps: true,
    }
)

export default mongoose.model('Project', projectSchema)