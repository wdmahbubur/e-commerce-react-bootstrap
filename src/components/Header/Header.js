import React from 'react';
import './Header.css';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faPlusCircle, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://vetra.laborasyon.com/assets/images/logo.svg"
                    width="100"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <div className="d-flex justify-content-around w-100">
                <div className="sidebar-toggle d-md-none">
                    <label htmlFor="toggle"><FontAwesomeIcon icon={faBars} onClick={props.handleSidebar}></FontAwesomeIcon></label>
                    <input type="checkbox" id="toggle" />
                </div>
                <h1 className="page-name">Overview</h1>
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
                        <Button className="add-product-btn mx-2"><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Product</Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;