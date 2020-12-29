import mongoose from "mongoose"
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Order from './models/ordersModel.js'
import Products from './models/productsModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => { 

    try{ 
        await Order.deleteMany()
         await Products.deleteMany()
           await User.deleteMany()
            const createdUsers = await User.insertMany(users)
            const adminUser=createdUsers[0]._id
            const sampleProduct = products.map(product => {
                    return { 
                        ...product, user:adminUser
                    }
            })
            await Products.insertMany(sampleProduct)
            console.log('data fetc'.green.inverse)

            process.exit()

    }catch(e) { 
console.log(`${e}`.red.inverse)
process.exit(1)

    }

    
}
const destroyedData = async () => { 

    try{ 
        await    Order.deleteMany()
         await   Products.deleteMany()
           await  User.deleteMany()
console.log('data destroyed'.green.inverse)
process.exit()

    }catch(e) { 
console.log(`${e}`.red.inverse)
process.exit(1)

    }

    
}

if(process.argv[2] === '-d')
{
    destroyedData()
}
else { importData()}
