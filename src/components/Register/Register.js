import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { user, signInWithGoogle, registerUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        const email = e.target.value;
        if (/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            setEmail(email);
        }
        else {
            setEmail("error");
        }
    }
    const handlePass = e => {
        const password = e.target.value;
        if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(password)) {
            setPassword(password);
        }
        else {
            setPassword("error");
        }
    }
    const handleRegister = e => {
        e.preventDefault();
        registerUser(name, email, password);
    }

    useEffect(() => {
        if (user.email) {
            history.push('/dashboard');
        }
    }, [user])

    return (
        <div>
            <Container className="text-center">
                <h3 className="font-monospace" style={{ color: "var(--primary-color)" }}>Please Register</h3>
                <Form className="w-50 mx-auto text-start" onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onBlur={handleName} required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required />
                        {
                            email === "error" && <small className="text-danger">Please Enter Valid Email</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onBlur={handlePass} required />
                        {
                            password === "error" && <small className="text-danger">Please enter 8-20 characters password. Include one uppercase, one lowercase, one digit and one special character</small>
                        }

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <span className="ms-3">Are Your Already Register? Please <Link to="/login">Login</Link></span>
                </Form>
                <hr />
                <Button className="mx-2">Register With Facebook</Button>
                <Button className="btn btn-success mx-2 text-white" onClick={signInWithGoogle}>Register With Google</Button>
            </Container>
        </div>
    );
};

export default Register;