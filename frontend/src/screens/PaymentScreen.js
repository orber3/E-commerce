import React,{useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Button  , Col , Form} from 'react-bootstrap'
import FormContainer from '../component/FormContainer'
import {savePaymentMethod} from '../actions/cartAction'
import CheckOutSteps from '../component/checkOutSteps'

const PaymentScreen = ({history}) => {
       

    const dispatch = useDispatch()
    
        const cart = useSelector((state) => state.cart)
        const {shippingAddress} = cart
        if(!shippingAddress) { 
            history.push('./shipping')
        }
    
    const [paymentMethod , setPaymentMethod] = useState('paypal')
    
    
    
    const submitHandler = (e) => { 
        e.preventDefault()
        dispatch(savePaymentMethod({paymentMethod}))
    history.push('/placeOrder')
    }
        return (
           <FormContainer> 
               <CheckOutSteps step1 step2 step3/>
               <h1> Payment Method</h1>
    
            <Form onSubmit={submitHandler}> 
    <Form.Group> 
            <Form.Label as="legend"> 
            select Method
            </Form.Label>
                <Col> 
                <Form.Check type='radio'  label= 'paypal or credit card' id='paypal' name='paymentMethod' value='paypal' checked onChange = {(e) =>   setPaymentMethod(e.target.value)} > 
                </Form.Check>
                </Col>
                </Form.Group>

                    <Button type= 'submit' variant = 'primary'>
        continue                    </Button>
            </Form>

           </FormContainer>
        )
    }
    
       
    


export default PaymentScreen
