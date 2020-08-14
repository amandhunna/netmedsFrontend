import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './page404-2.gif'
import "./css.css";

// https://codepen.io/amanjotsuccessive/pen/LYpvYMj
export default function Page404() {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center w-100'>
                    <img className src={logo} alt='animated' />
                </Col>
            </Row>
        </Container>
    )
}
