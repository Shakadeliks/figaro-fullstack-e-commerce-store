const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken")

//UPDATING USER INFORMATION
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    //updating of user password
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_PASSPHRASE
            ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, 
            { new: true }
        );

        res.status(200).json(updatedUser)

    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router; 

