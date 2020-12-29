import React,{useEffect, useState} from 'react'
import { Row ,  Col,Form ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {login} from '../actions/userAction'
import FormContainer from '../component/FormContainer'


const UserLoginScreen = ({location , history}) => {
    const dispatch = useDispatch()

const [email , setEmail] = useState('')
const [password, setPassword] = useState('')


const userLogin = useSelector(state => state.userLogin)
const {loading , error , userInfo} = userLogin



const redirect = location.search ? location.search.split('=')[1] : '/'


useEffect(() => { 
if(userInfo){ 
    history.push(redirect)
}


}, [history,userInfo,redirect])
const submitHandler =(e) => { 
e.preventDefault()
dispatch(login(email , password))


}

    return (
      <FormContainer> 
            <h1> Sign in</h1>
            {error && <Message variant = 'danger'>{error}  </Message> }
            {loading && <Loader />}
            <Form onSubmit={submitHandler}> 
                <Form.Group controlId = "email"> 
                <Form.Label> Email:</Form.Label>
                <Form.Control type = "email" placeholder="email" value={email} onChange ={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
                <Form onSubmit={submitHandler}> 
                <Form.Group controlId = "password"> 
                <Form.Label> password:</Form.Label>
                <Form.Control type = "password" placeholder="password" value={password} onChange ={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>


                <Button type= 'submit' variant = 'primary'>
                    sign in
                    </Button> 
            </Form>
                    <Row className='py-3'> 
                    <Col> 
                    New Customer? <Link to={redirect ? `register?redirect=${redirect}` : `/register` }> 
                    Register
                    </Link>
                    </Col>
                    </Row>

      </FormContainer>
      
    )
}

export default UserLoginScreen
