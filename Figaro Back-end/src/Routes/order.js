const express = require('express');
const { verify } = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Order = require('../Models/Order')
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE ORDER

router.post("/", verifyToken, async (req, res) => {

    // console.log(req.body);

    const newOrder = new Order(req.body);
    
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATING Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, 
            { new: true }
        );

        res.status(200).json(updatedOrder)

    } catch(error) {
        res.status(500).json(error)
    }
})

// DELETE Order ITEM

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders= await Order.find({ userId: req.params.userId });

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL ORDERS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
}) 
 
module.exports = router;