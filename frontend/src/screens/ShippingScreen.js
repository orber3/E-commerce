
import React,{useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { Button  , Form} from 'react-bootstrap'
import Rating from '../component/Rating'
import {listProductsDetail} from '../actions/productActions'
import FormContainer from '../component/FormContainer'
import {saveShippingAddress} from '../actions/cartAction'
import CheckOutSteps from '../component/checkOutSteps'

const ShippingScreen = ({history}) => {

const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart

const [address , setAddress] = useState(shippingAddress.address)
const [city , setCity] = useState(shippingAddress.city)
const [postalCode , setPostalCode] = useState(shippingAddress.postalCode)
const [country , setCountry] = useState(shippingAddress.country)


const submitHandler = (e) => { 
    e.preventDefault()
    dispatch(saveShippingAddress({address,city,postalCode,country}))
history.push('/payment')
}
    return (
       <FormContainer> 
           <CheckOutSteps step1 step2 />
           <h1> Shipping</h1>

        <Form onSubmit={submitHandler}> 

        <Form.Group controlId = "address"> 
                <Form.Label>Name</Form.Label>
                <Form.Control type = "text" placeholder="address" value={address} required onChange ={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "city"> 
                <Form.Label>City</Form.Label>
                <Form.Control type = "text" placeholder="City" value={city} required onChange ={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                
                <Form.Group controlId = "PostalCode"> 
                <Form.Label>Postal code</Form.Label>
                <Form.Control type = "text" placeholder="postal code" value={postalCode} required onChange ={(e) => setPostalCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "country"> 
                <Form.Label>country</Form.Label>
                <Form.Control type = "text" placeholder="country" value={country} required onChange ={(e) => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>


                <Button type= 'submit' variant = 'primary'>
    continue                    </Button>
        </Form>
       </FormContainer>
    )
}

export default ShippingScreen
