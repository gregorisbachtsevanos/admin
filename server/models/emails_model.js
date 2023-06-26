import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        hasBeenRead: Boolean,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Email', emailSchema)