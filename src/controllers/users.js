const mongoose = require("mongoose")
const { json } = require("express/lib/response");
import Users from '../models/user'

export default new class userController {
    async signupController(req, res) {
        const { name, phone, email, password } = req.body;
        try {
            const newUser = new Users({
                name,
                phone,
                email,
                password
            })
            const savedUser = await newUser.save();
            res.status(201).json({ message: "account created successfully", savedUser })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    async getUsers(req, res) {
        try {
            const allUsers = await Users.find();
            res.status(200).json({ msg: "all users retrieved", allUsers })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

    async getUser(req, res) {
        const { _id } = req.params
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const user = await Users.findById({ _id });

            if (!user) return res.status(404).json({ mgs: "User not found" })

            res.status(200).json({ user })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    async deleteUser(req, res) {
        // console.log(req.params)
        const { _id } = req.params
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const user = await Users.findOneAndDelete({ _id });

            if (!user) return res.status(404).json({ mgs: "User not found" })

            res.status(200).json({ user, msg: "User deleted" })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    async updateUser(req, res) {
        console.log('-----------' + req.params.id)
        const body = req.body
        console.log(req.body)
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid id" })
        try {
            const user = await Users.findByIdAndUpdate({ _id: req.params.id }, { ...body });

            if (!user) return res.status(404).json({ mgs: "User not found" })

            res.status(200).json({ user, msg: "User updated" })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

}

