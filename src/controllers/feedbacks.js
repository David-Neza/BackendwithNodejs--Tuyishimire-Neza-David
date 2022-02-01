const mongoose = require("mongoose")
const { json } = require("express/lib/response");
import Feedback from '../models/feedback'

export default new class feedbacksController {
    async sendFeedback(req, res) {
        const { name, email, message } = req.body;
        try {
            const newFeedback = new Feedback({
                name,
                email,
                message
            })
            const savedFeedback = await newFeedback.save();
            res.status(200).json({ message: "Feedback sent successfully", savedFeedback })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    async getFeedbacks(req, res) {
        try {
            const allFeedbacks = await Feedback.find();
            res.status(200).json({ msg: "all feedbacks retrieved", allFeedbacks })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    async deleteFeedback(req, res) {
        // console.log(req.params)
        const _id = req.params.id
        // console.log(_id)
        // console.log("hello")
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const feedback = await Feedback.findOneAndDelete(_id);

            // if (!feedback) return res.status(404).json({ mgs: "Feedback not found" })

            res.status(200).json({ msg: "Feedback deleted" })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}

