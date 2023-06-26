import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Client', clientsSchema)