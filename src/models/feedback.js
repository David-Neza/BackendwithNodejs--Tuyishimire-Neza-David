import mongoose, { Schema } from 'mongoose'

const feedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const feedback = mongoose.model("Feedback", feedbackSchema);
export default feedback