import React,{useEffect, useState} from 'react'
import { Row ,  Col,Form ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {register} from '../actions/userAction'
import FormContainer from '../component/FormContainer'


const RegisterScreen = ({location , history}) => {
    const dispatch = useDispatch()

const [email , setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [confirmpass, setConfirmpass] = useState('')
const [message, setMessage] = useState(null)



const userRegister = useSelector((state) => state.userRegister)
const {loading , error , userInfo} = userRegister



const redirect = location.search ? location.search.split('=')[1] : '/'


useEffect(() => { 
if(userInfo){ 
    history.push(redirect)
}


}, [history,userInfo,redirect])
const submitHandler =(e) => { 
e.preventDefault()
if(password !== confirmpass) { 
    setMessage(`passwords do not match ${password} 2: ${confirmpass}`)
}
 dispatch(register(name , email, password))


}

    return (
      <FormContainer> 
            <h1> Sign up</h1>
            {message && <Message variant = 'danger'>{message}  </Message> }
            {error && <Message variant = 'danger'>{error}  </Message> }
            {loading && <Loader />}

            <Form onSubmit={submitHandler}> 
            <Form.Group controlId = "name"> 
                <Form.Label>Name</Form.Label>
                <Form.Control type = "name" placeholder="name" value={name} onChange ={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "email"> 
                <Form.Label> Email:</Form.Label>
                <Form.Control type = "email" placeholder="email" value={email} onChange ={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "password"> 
                <Form.Label> password:</Form.Label>
                <Form.Control type = "password" placeholder="password" value={password} onChange ={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "password"> 
                <Form.Label> confirmpassword:</Form.Label>
                <Form.Control type = "password" placeholder="confirmPassword" value={confirmpass} onChange ={(e) => setConfirmpass(e.target.value)}>
                    </Form.Control>
                </Form.Group>


                <Button type= 'submit' variant = 'primary'>
    REGISTER                    </Button>
          </Form>
                    <Row clasName='py-3'> 
                    <Col> 
                    have an account ? <Link to={redirect ? `login?redirect=${redirect}` : `/login` }> 
                    Login
                    </Link>
                    </Col>
                    </Row>

      </FormContainer> 
      
    )
}

export default RegisterScreen
