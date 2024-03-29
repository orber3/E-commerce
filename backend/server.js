import express from 'express'
import dotenv  from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/error.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const PORT = process.env.PORT || 5000
const app = express()


dotenv.config()

connectDB()
app.listen(PORT,  console.log(  `${process.env.NODE_ENV} mode and port ${process.env.PORT}`))

app.use(express.json())

app.use('/api/products' , productRoutes)

// app.use('/api/users' , userRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req,res) => res.send(process.env.PAYPAL_CLIENT_ID))


app.get('/', (req,res) => { 
    res.send('runs.')
    
    
    })


    app.use(notFound)
     app.use(errorHandler)
    
    
    