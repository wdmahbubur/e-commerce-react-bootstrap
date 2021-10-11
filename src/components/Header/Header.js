import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const { user, signOutCurrentUser } = useAuth();

    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <div className="d-flex justify-content-around w-100">
                <div className="sidebar-toggle d-md-none">
                    <label htmlFor="toggle"><FontAwesomeIcon icon={faBars} onClick={props.handleSidebar}></FontAwesomeIcon></label>
                    <input type="checkbox" id="toggle" />
                </div>

                <Form className="d-flex w-75 navbar-search-box">

                    <label htmlFor="Search" className="p-2"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></label>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="w-50">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="mx-2">
                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link href="#action2" className="mx-2">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </Nav.Link>
                        {user.email ? <>
                            <Link to="/dashboard" className="mx-2 nav-link">
                                Dashboard
                            </Link>
                            <Button className="mx-2" onClick={signOutCurrentUser}>
                                Logout
                            </Button>
                        </>
                            : <>
                                <Nav.Link href="/login" className="mx-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link href="/register" className="mx-2">
                                    Register
                                </Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;