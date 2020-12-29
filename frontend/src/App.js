import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import {Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreens from './screens/ProductScreens'
import CartScreen from './screens/CartScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import userLoginScreen from './screens/userLoginScreen'
import RegisterScreen from './screens/registerScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/orderScreen'


const App = () => { 

  return ( 
    <> 
    <Router>
    <Header /> 
  <main className = 'py-3'>
    <Container> 

    <Route path= '/login'  component = {userLoginScreen} exact /> 
<Route path= '/'  component = {HomeScreen} exact /> 
<Route path= '/product/:id'  component = {ProductScreens}  /> 
<Route path= '/shipping'  component = {ShippingScreen}  /> 
<Route path= '/cart/:id?'  component = {CartScreen}  /> 
<Route path= '/register'  component = {RegisterScreen}  /> 
<Route path= '/profile'  component = {ProfileScreen}  /> 
<Route path= '/payment'  component = {PaymentScreen}  />
<Route path= '/placeOrder'  component = {PlaceOrderScreen}  />
<Route path= '/order/:id'  component = {OrderScreen}  />


</Container>

  </main>
    <Footer /> 
    </Router>

    </>
  )
}

export default App;
