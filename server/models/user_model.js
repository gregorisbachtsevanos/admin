import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        default: 'Firstname'
    },
    lastname: {
        type: String,
        trim: true,
        default: 'Lastname'
    },
    occupation: {
        type: String,
        trim: true,
        default: 'Occupation'
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    extra_info: {
        theme: {
            type: String,
            enum: ['Dark', 'Light', 'System'],
            trim: true,
            default: 'Dark'
        },
        language: {
            type: String,
            trim: true,
            default: 'English'
        },
        status: {
            type: Boolean,
            default: false
        },
        about: {
            type: String,
            trim: true,
            default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus facilis iste odio quasi corporis dolorum vel blanditiis voluptas alias?'
        },
        contact: {
            type: String,
            trim: true,
            default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus facilis iste odio quasi corporis dolorum vel blanditiis voluptas alias?'
        },
    }
},
    {
        timestamps: true,
    }
)

export default mongoose.model('User', userSchema)