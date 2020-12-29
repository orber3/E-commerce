import React,{useEffect, useState} from 'react'
import { Row ,  Col,Form ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {getUserDetails,updateUserProfile} from '../actions/userAction'
import { USER_UPDATE_RESET } from '../CONSTANTS/UserConstants'

const ProfileScreen = ({location , history}) => {
    const dispatch = useDispatch()

const [email , setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [confirmpass, setConfirmpass] = useState('')
const [message, setMessage] = useState(null)



const userDetails = useSelector((state) => state.userDetails)
const {loading , error , user} = userDetails

const userLogin = useSelector((state) => state.userLogin)
const {userInfo} = userLogin

const userUpdate = useSelector((state) => state.userUpdate)
const {success} = userUpdate

useEffect(() => { 
if(!userInfo){ 
    history.push('/login')
} else{
    if(!user.name) {
        dispatch(getUserDetails('profile'))
        } else { 
        setName(user.name)
        setEmail(user.email)
    }
}


}, [dispatch,userInfo,history, user])



const submitHandler =(e) => { 
e.preventDefault()
if(password !== confirmpass) { 
    setMessage(`passwords do not match ${password} 2: ${confirmpass}`)
} else{ 
 dispatch(updateUserProfile({id: user._id , name , email , password}))
}

}

    return (
     <Row> 
         <Col md={3} > 
         <h2> User Profile </h2>
            {message && <Message variant = 'danger'>{message}  </Message> }
            {error && <Message variant = 'danger'>{error}  </Message> }
            {success && <Message variant = 'success'>profile updated  </Message> }

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
            </Form>
                <Form onSubmit={submitHandler}> 
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
    UPDATE                    </Button> 
            </Form>
         
         </Col>
         <Col md = {9}> 
                <h2> My Orders</h2>
         </Col>
     </Row>
      
    )
}


export default ProfileScreen
