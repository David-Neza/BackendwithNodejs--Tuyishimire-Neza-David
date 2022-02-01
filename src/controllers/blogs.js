const mongoose = require("mongoose")
const { json } = require("express/lib/response");
import Blogs from '../models/blog'

export default new class blogController {
    async createBlog(req, res) {
        // console.log("hello");
        const { blog_title, blog_author, blog_picture, blog_body, comments } = req.body;
        try {
            const newBlog = new Blogs({
                blog_title,
                blog_author,
                blog_picture,
                blog_body,
                comments
            })
            const savedBlog = await newBlog.save();
            res.status(201).json({ message: "Blog added successfully", savedBlog })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
    async updateBlog(req, res) {
        console.log('-----------' + req.params.id)
        const body = req.body
        console.log(req.body)
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const blog = await Blogs.findByIdAndUpdate({ _id: req.params.id }, { ...body });

            if (!blog) return res.status(404).json({ mgs: "Blog not found" })

            res.status(200).json({ blog, msg: "Blog updated" })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

    async getBlogs(req, res) {
        try {
            const allBlogs = await Blogs.find();
            res.status(200).json({ msg: "all blogs retrieved", allBlogs })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

    async getBlog(req, res) {
        const _id = req.params.id
        console.log(_id)
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const blog = await Blogs.findById({ _id });

            if (!blog) return res.status(404).json({ mgs: "Blog not found" })

            res.status(200).json({ blog })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    async deleteBlog(req, res) {
        // console.log(req.params)
        const _id = req.params.id
        // console.log("hello")
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const blog = await Blogs.findOneAndDelete({ _id });

            if (!blog) return res.status(404).json({ mgs: "Blog not found" })

            res.status(200).json({ blog, msg: "Blog deleted" })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    async blogComment(req, res) {
        const _id = req.params.id
        const comment = {
            username: req.body.username,
            text: req.body.text
        };
        console.log(comment)
        Blogs.findByIdAndUpdate(_id, {
            message: console.log(comment),
            $push: { comments: comment }
        })
            .then((blog) =>
                res.json({
                    status: "Comment has been added",
                    blog,
                })
            )
            .catch((err) => console.log(err));
    };
}

