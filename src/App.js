import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import OrderList from './components/Order/OrderList';
import OrderDetails from './components/Order/OrderDetails';
import GridViewProducts from './components/Products/GridViewProducts';
import Register from './components/Register/Register';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleSidebar = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <header className="position-sticky top-0 w-100">
            <Header handleSidebar={handleSidebar}></Header>
          </header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <>
              <Sidebar toggle={toggle}></Sidebar>
              <div className="component-container">
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/order-list">
                  <OrderList></OrderList>
                </PrivateRoute>
                <PrivateRoute path="/order-details">
                  <OrderDetails></OrderDetails>
                </PrivateRoute>
                <PrivateRoute path="/products/grid-view">
                  <GridViewProducts></GridViewProducts>
                </PrivateRoute>
              </div>
            </>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
