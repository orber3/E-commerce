
import React,{useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { Button  , Row , Col , ListGroup, Image , Card} from 'react-bootstrap'
import Message from '../component/Message'
import CheckOutSteps from '../component/checkOutSteps'
import {createOrder} from '../actions/orderAction'

const PlaceOrderScreen = ({history}) => {

     const dispatch = useDispatch()

    const addDecimel = (num ) =>  { 
        return (Math.round(num*100)/100).toFixed(2)

    }
    const cart = useSelector((state) => state.cart)

    cart.itemsPrice = addDecimel(cart.cartItems.reduce((acc,item) => acc + item.price * item.qty , 0))


    //shipping price
    cart.shippingPrice = addDecimel(cart.itemsPrice > 100 ? 0 : 100)

    cart.TaxPrice= addDecimel(Number((0.15*cart.itemsPrice).toFixed(2)))
cart.TotalPrice = (
    Number(cart.itemsPrice) 
    + Number(cart.shippingPrice)
     + Number(cart.TaxPrice)
     ).toFixed(2)

     const orderCreate = useSelector(state => state.orderCreate)
    const { order , success , error} = orderCreate

    useEffect(() => {
        if(success) { 
            console.log(cart.TotalPrice)
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history,success])

    const placeOrderHandler = () =>  {

dispatch(createOrder({
orderItems: cart.cartItems,
shippingAddress: cart.shippingAddress,
paymentMethod: cart.paymentMethod.paymentMethod,
itemsPrice: cart.itemsPrice,
shippingPrice: cart.shippingPrice,
taxPrice: cart.TaxPrice,
totalPrice: cart.TotalPrice
}))

    }
    return (
<>
                                <CheckOutSteps step1 step2 step3 step4/>
                <Row> 
                    <Col md={8}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item> 
                        <h2> shipping</h2>
                        <p>
                            <strong> Address:</strong> {''}
                            {cart.shippingAddress.address} ,{''} {cart.shippingAddress.city} {''}
                            {cart.shippingAddress.postalCode}{''} ,   {cart.shippingAddress.country} 
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item> 
                        <h2> Payment Method</h2>
                        <strong> Method:</strong>
                            {cart.paymentMethod.paymentMethod}

                        </ListGroup.Item> 

                        <ListGroup.Item>
                            <h2> Order Items: </h2>
                            {cart.cartItems.length ===0 ? <Message> Your Cart is Empty! </Message>
                            : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row> 
                                                <Col md={1}> 
                                                <Image src={item.image} alt={item.name}
                                                fluid rounded /> 
                                                </Col>
                                                <Col> 
                                                        <Link to={`/product/${item.product}`}>
                                                        {item.name}

                                                        </Link>
                                                </Col>
                                                <Col md={7}>
                                                        {item.qty} x ${item.price} = ${item.qty * item.price}
                                                    </Col> 
                                            </Row>
                                            </ListGroup.Item>
                                    ))}
                                     </ListGroup>
                            )}

                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col md={4} > 
                    <Card> 
                            <ListGroup variant='flush'> 
                            <ListGroup.Item> 
                                <h2> Ordr Summary</h2>
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row> 
                                        <Col> Items</Col>
                                        <Col> ${cart.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row> 
                                        <Col> Shipping</Col>
                                        <Col> ${cart.shippingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row> 
                                        <Col> Tax</Col>
                                        <Col> ${cart.TaxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row> 
                                        <Col> Total</Col>
                                        <Col> ${cart.TotalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item> 
                                    {error && <Message variant = 'danger'>{error} </Message>}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                   <Button type='button' className='btn-block' disabled={cart.cartItems ===0} 
                                   onClick = { placeOrderHandler} > Place Order
                                   </Button> 
                                </ListGroup.Item>
                                
                                </ListGroup>                
        
                        </Card>
                    
                    </Col>
                </Row>
</>
    )
}

export default PlaceOrderScreen
