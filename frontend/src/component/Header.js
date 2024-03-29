import React from 'react'
import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import {logout} from '../actions/userAction'
const Header = () => {




  const userLogin = useSelector( (state) => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  
  const logoutHandler = () => {
    dispatch(logout())
      }
    return <header>
    <Navbar bg="dark" variant= 'dark' expand="lg" collapseOnSelect>
    <Container> 
<LinkContainer to='/'>
  <Navbar.Brand>or's Eccommerce</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

    <LinkContainer to='/cart'>
   <Nav.Link>
        <i className = 'fas fa-shopping-cart'> cart</i>
        </Nav.Link>
        </LinkContainer>
        {userInfo ? (
          <NavDropdown title= {userInfo.name} id='username'>
            <LinkContainer to='/profile'>
            <NavDropdown.Item> profile </NavDropdown.Item>
            </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler} > LogOut </NavDropdown.Item>
          </NavDropdown>
          

        ) :  (
        <LinkContainer to='/login'>
      <Nav.Link> <i className = ' fas fa-user' > </i>Sign in</Nav.Link>
      </LinkContainer> ) 
      } 
       

    </Nav>
 
  </Navbar.Collapse>
  </Container> 

</Navbar>
      
        </header>
    
}

export default Header
