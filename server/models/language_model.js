import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
    language:
    {
        type: String,
        required: true,
        trim: true
    }

},
    {
        timestamps: true,
    }
)

export default mongoose.model('Language', languageSchema)