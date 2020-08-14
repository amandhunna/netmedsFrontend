/* eslint-disable no-unreachable */
import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import helper from '../../lib/helper/base';
import logger from '../../lib/helper/logger';
import config from '../../config';
import './login.css';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = `${config.url.user}/${username}/${password}`;
        const reqData = { url, method: "GET" };
        try {
            const response = await helper.requestAPI(reqData);
            if (!response.length) {
                setError("User not found");
                return
            }
            const user = JSON.stringify(response[0]);
            localStorage.setItem("isauth", true);
            localStorage.setItem("netUser", user);
            props.route.history.push('/');
            if (error) {
                setError(error.message);
            }

        }
        catch (error) {
            logger.warn('login error occured', error)
        }
    }
    return <Container className="login-section p-5">
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>Login</Button>
                    {error && <span className='ml-3'>{error}</span>}
                </Form>
            </Col>
        </Row >
    </Container >
}
