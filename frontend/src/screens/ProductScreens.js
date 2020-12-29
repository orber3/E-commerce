import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import {Row , Col, ListGroup, ListGroupItem , Card , Button , Image , Form} from 'react-bootstrap'
import Rating from '../component/Rating'
import {listProductsDetail} from '../actions/productActions'
import Loader from '../component/Loader'
import Message from '../component/Message'



const ProductScreens = ({match , history}) => {
const [qty ,setQty]  = useState(1)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProductsDetail(match.params.id))
     },dispatch , [match])
     const ProductDetail = useSelector(state => state.ProductDetail)
        const {loading , error ,product} = ProductDetail



const addToCartHandler = () => { 
history.push(`/cart/${match.params.id}?qty=${qty} `)

}

    return (
        <>
                <Link className = 'btn btn-dark my-3' to='/' > go back</Link>
                {loading? <Loader /> : error ? <Message variant = 'danger'>{error} </Message> 
                : (
                
                    <Row> 
                    <Col md="6">
                    <Image src = {product.image} alt={product.name} fluid />
    
                    </Col>
                    <Col md="3">
                        <ListGroup variant = 'flush'> 
                            <ListGroupItem> 
                                <h3> {product.name} </h3>
                            </ListGroupItem>
                        <ListGroupItem> 
                        <Rating value = {product.rating} text= {`${product.numReviews} reviews`} /> 
                        </ListGroupItem>
                        <ListGroupItem>
                            price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            description: ${product.description}
                        </ListGroupItem>
    
    
                        </ListGroup>
                    </Col>
                    <Col md={3}> 
                    <Card> 
                    <ListGroup variant = 'flush'> 
                        <ListGroupItem>
                            <Row> 
                                <Col> 
                                    Price:
                                </Col>
                                <Col> 
                                <strong> 
                                {product.price}
                                </strong>
                                </Col>
    
                            </Row>
                            </ListGroupItem> 
                            <ListGroupItem>
                            <Row> 
                                <Col> 
                                    Status:
                                </Col>
                                <Col> 
                                <strong> 
                                {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                </strong>
                                </Col>
                                
                            </Row>
                            </ListGroupItem> 
                            {product.countInStock > 0 && ( 
                                <ListGroupItem> 
                                <Row>
                                    <Col> QTY </Col>
                                    <Col>
                                    <Form.Control as='select' value={qty} onChange={(e)=> setQty(e.target.value)}>
                                        {
                                        [...Array(product.countInStock).keys()].map((x) => (
                                            <option key = {x + 1 }> {x +1 } </option>
                                        )) }
                                    </Form.Control>
                                     </Col>
                                            </Row> 

                                </ListGroupItem>

                            )}
                                <ListGroupItem>
                                    <Button className = 'btn-block' type='Button' 
                                    disabled={product.countInStock === 0}
                                    onClick = {addToCartHandler}
                                    
                                    >  Add to cart </Button> 
                                    
                                    </ListGroupItem> 
    
    
                    </ListGroup>
    
                    </Card>
                    </Col>
                    </Row>
                )
            }
               

        </>
    )
}

export default ProductScreens
