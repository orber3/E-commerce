import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema( { 
name:{ type: String, required: true},
rating:{ type: Number, required: true},
comment:{ type: String, required: true}
} , { 
    timestamps: true,

})


const ProductsSchema = mongoose.Schema({


    user: { 
        type: mongoose.Schema.Types.ObjectId , 
        required: true,
        ref: 'User'
    },
name: { 
    type: String,
    required: true

},

image: { 
    type: String,
    required: true,

},

brand: { 
    type: String,
    required: true

},

catagory: { 
    type: String,
} ,

description: { 
    type: String,
    required: true,
} ,

review:[reviewSchema],

rating: { 
    type: Number,
    required: true,
    default: 0
} ,

numReviews: { 
    type: Number,
    required: true,
    default: 0

} ,

price: { 
    type: Number,
    required: true,
    default: 9999

} ,

countInStock: { 
    type: Number,
    required: true,
    default: 0

} ,
})


const Product  = mongoose.model('Product' , ProductsSchema)

export default Product