import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { user, signInWithGoogle, signIn, error, signInWithFacebook } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    let history = useHistory();


    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePass = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleSignIn = e => {
        e.preventDefault();
        signIn(email, password);
    }

    const redirect_url = location.state?.from || "/";
    useEffect(() => {
        if (user.email) {
            history.push(redirect_url);
        }
    }, [user])

    return (
        <Container className="text-center">
            <h3 className="font-monospace" style={{ color: "var(--primary-color)" }}>Please Login</h3>
            <Form className="w-50 mx-auto text-start" onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={handlePass} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <span className="ms-3"></span>
            </Form>
            <h5 className="text-danger">{error}</h5>
            <hr />
            <Button className="btn btn-success"><Link to="/register" className="text-white text-decoration-none">Create New Account</Link></Button>
            <h6>OR</h6>
            <Button className="mx-2" onClick={signInWithFacebook}>Login With Facebook</Button>
            <Button variant="secondary" className="mx-2 text-white" onClick={signInWithGoogle}>Login With Google</Button>
        </Container>
    );
};

export default Login;