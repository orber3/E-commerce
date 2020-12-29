import Product from '../models/productsModel.js'
import asyncHandler from 'express-async-handler'



const getProducts =asyncHandler(async (req,res) =>  {

        const products = await Product.find({})
        
            res.json(products)
        
})

const getProductById =asyncHandler(async (req,res) =>  {
        const product= await Product.findById(req.params.id)
            if(!product) { 
                res.status(404).json({message: "not found "})
            }
            res.json(product)

    
})

export {
     getProductById  ,getProducts }