const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const Cart = require('../Models/Cart')
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE CART

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch (error) {
        res(500).json(err);
    }
})

// UPDATING Product INFORMATION
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    //updating of cart
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, 
            { new: true }
        );

        res.status(200).json(updatedProduct)

    } catch(error) {
        res.status(500).json(error)
    }
})

// // DELETE PRODUCT

// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         await Product.findByIdAndDelete(req.params.id)
//         res.status(200).json("Product has been deleted...")
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

// //GET PRODUCT
// router.get("/find/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);

//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

// // GET ALL PRODUCTS
// router.get("/", async (req, res) => {

//     const queryNew = req.query.new; // probably delete cause dont need
//     const queryCategory = req.query.category;

//     try {
//         let products;
        
//         if(queryNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(5)
//         } else if(queryCategory) {
//             products = await Product.find({
//                 category: {
//                     $in: [queryCategory]
//                 }
//             });
//         } else {
//             products = await Product.find();
//         }

//         res.status(200).json(products);

//     } catch (error) {
//         res.status(500).json(error);
//     }
// })


module.exports = router; 

