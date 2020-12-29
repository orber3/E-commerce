import React,{useEffect, useState} from 'react'
import { Row ,  Col} from 'react-bootstrap'
import {Product} from '../component/Product'
import axios from 'axios'
import { useDispatch , useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from '../component/Loader'
import Message from '../component/Message'

const HomeScreen = () => {
const dispatch = useDispatch()
const productList = useSelector(state => state.productlist)
const{loading , error , products} = productList


    useEffect(() => {
       dispatch(listProducts())

    },[dispatch])


    return (
<>
            <h1> products</h1>
            { loading ? (<Loader /> )
              : error ? ( <Message variant = 'danger'> {error} </Message> )
              : (
            
            <Row> 
            {products.map(product => (

                    <Col key = {product._id} sm={12} md={6} lg={3} >
                     <Product product={product} /> 
                    </Col>
        ))}

        </Row>
              )
          
}
</>
    )
}

export default HomeScreen
