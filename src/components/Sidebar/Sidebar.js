import { faReceipt, faShoppingBag, faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = (props) => {

    return (
        <aside>
            <div className="sidebar-scroll">
                <div className="user-info">
                    <img src="https://vetra.laborasyon.com/assets/images/user/man_avatar3.jpg" alt="" className="user-avatar" />
                    <div className="user-details">
                        <h6>Timotheus Bendan</h6>
                        <small>Sales Manager</small>
                    </div>
                </div>
                <div className="mt-3 side-navbar">
                    <small>E-Commerce</small>
                    <ul className="list-unstyled side-nav">
                        <li className="side-nav-item">
                            <NavLink to="/#" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                <div className="side-nav-item-icon">
                                    <FontAwesomeIcon icon={faSignal}></FontAwesomeIcon>
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="side-nav-item">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon>
                                            </div>
                                            <span>Orders</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Products</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Grid View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Product Detail</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Shopping Cart</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    </ul>
                    <small>E-Commerce</small>
                    <ul className="list-unstyled side-nav">
                        <li className="side-nav-item">
                            <NavLink to="/#" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                <div className="side-nav-item-icon">
                                    <FontAwesomeIcon icon={faSignal}></FontAwesomeIcon>
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="side-nav-item">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon>
                                            </div>
                                            <span>Orders</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Products</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Grid View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Product Detail</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Shopping Cart</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    </ul>
                    <small>E-Commerce</small>
                    <ul className="list-unstyled side-nav">
                        <li className="side-nav-item">
                            <NavLink to="/#" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                <div className="side-nav-item-icon">
                                    <FontAwesomeIcon icon={faSignal}></FontAwesomeIcon>
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="side-nav-item">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon>
                                            </div>
                                            <span>Orders</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Products</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>List View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Grid View</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Product Detail</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Shopping Cart</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="side-nav-item-link" >
                                            <div className="side-nav-item-icon">
                                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                            </div>
                                            <span>Buyer</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            <li className="side-nav-item">
                                                <NavLink to="/order-list" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/products/grid-view" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Orders</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Addresses</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Wishlist</span>
                                                </NavLink>
                                            </li>
                                            <li className="side-nav-item">
                                                <NavLink to="/order-details" className="side-nav-item-link" activeClassName="side-nav-item-active">
                                                    <span>Checkout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;