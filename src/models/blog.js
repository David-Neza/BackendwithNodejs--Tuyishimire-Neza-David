import mongoose, { Schema } from 'mongoose'

const blogSchema = mongoose.Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_author: {
        type: String,
        required: true
    },
    blog_picture: {
        type: String,
    },
    blog_body: {
        type: String,
        required: true
    },
    comments: [{
        username: {
            type: String,
        },
        text: {
            type: String,
        }
    }
    ]
});

const blog = mongoose.model("Blogs", blogSchema);
export default blog