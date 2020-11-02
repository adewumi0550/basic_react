import React, { Component } from 'react'
import {Row,Col, Form, Button, Container } from 'react-bootstrap';
export class Login extends Component {
    render() {
        return (
            <Row>
                <Container>
                    <h4 style={{marginTop:"12px"}}>Login Page</h4>
                    <p>Kindly Provide your login Details to Access your Account</p>
                <Col lg={5}>
                <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Authenticate 
                        </Button>
                    </Form>

                </Col>
                </Container>
            </Row>
        )
    }
}

export default Login
