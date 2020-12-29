import express from 'express'
import Product from '../models/productsModel.js'
const router = express.Router()
import {getProductById,getProducts} from '../controllers/productController.js'



//find all products
router.route('/').get(getProducts)


    //find  product by ID

router.route('/:id').get(getProductById)


export default router