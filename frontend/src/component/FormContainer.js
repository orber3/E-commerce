import React from 'react'
import {Container , Row , Form , Col} from 'react-bootstrap'
const FormContainer = ({children}) => {
    return (
        <Container>
            <Row className = 'justify-conent-md-center'>
                <Col xs = {12} md={6}>
                {children}

                </Col>


            </Row>
            
        </Container>
    )
}

export default FormContainer
