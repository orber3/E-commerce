import {  createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productDetailReducer, productListReducer } from './reducers/productReducer'
import {CartReducer } from './reducers/CartReducer'
import {UserLoginReducer, UserDetailsReducer,UserUpdateReducer} from './reducers/userReducer'
import {userRegisterReducer} from './reducers/registerReducer copy'
import {orderCreateReducer} from './reducers/orderReducer'
import {orderDetailsReducer , orderPayReducer} from './reducers/orderReducer'




const reducer = combineReducers({
productlist: productListReducer,
ProductDetail: productDetailReducer,
cart: CartReducer,
userLogin: UserLoginReducer,
userRegister: userRegisterReducer,
userDetails: UserDetailsReducer,
userUpdate: UserUpdateReducer,
orderCreate: orderCreateReducer,
orderDetails: orderDetailsReducer,
orderPay: orderPayReducer,
})


 const cartItemsFromStorage = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')) : []

 
 const userInfosFromStorage = localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo')) : []
 
 const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
 ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
 




const initialState = {
cart: {cartItems: cartItemsFromStorage,  shippingAddress: shippingAddressFromStorage},
userLogin: { userInfo: userInfosFromStorage},

}
const middleware = [thunk]
const store =createStore(reducer,initialState,composeWithDevTools (applyMiddleware(...middleware)))

export default store