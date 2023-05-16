require('dotenv').config()
const User = require('../models/user.model');
const Vendor = require('../models/vendor.model');
const bcrypt = require('bcrypt');
const signingRoutes = {};

signingRoutes.userRegister = async (req, res) => {

    try {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(403).json({
                status: 'Failed',
                message: "Email Id already exists"
            })
        } else {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            let hashedAnswer = await bcrypt.hash(req.body.resetAnswer, 10);
            let newUser = new User({
                ...req.body,
                resetAnswer: hashedAnswer,
                password: hashedPassword
            });
            await newUser.save();
            res.status(200).json({
                status: 'Sucess',
                user: newUser
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
}

signingRoutes.vendorRegister = async (req, res) => {
    try {
        let vendor = await Vendor.findOne({ email: req.body.email });
        if (!vendor) {
            return res.status(403).json({
                status: 'Failed',
                message: "Email Id already exists"
            })
        } else {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            let hashedAnswer = await bcrypt.hash(req.body.resetAnswer, 10);
            let newVendor = new Vendor({
                ...req.body,
                resetAnswer: hashedAnswer,
                password: hashedPassword
            });
            await newVendor.save();
            res.status(200).json({
                status: 'Sucess',
                user: newVendor
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
}






module.exports = signingRoutes