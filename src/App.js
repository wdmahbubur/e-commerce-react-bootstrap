import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderList from './components/Order/OrderList';
import OrderDetails from './components/Order/OrderDetails';
import Overview from './components/Overview/Overview';
import GridViewProducts from './components/Products/GridViewProducts';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleSidebar = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div>
      <header className="position-sticky top-0 w-100">
        <Header handleSidebar={handleSidebar}></Header>
      </header>
      <main>
        <BrowserRouter>
          <Sidebar toggle={toggle}></Sidebar>
          <div className="component-container">
            <Switch>
              <Route exact path="/">
                <Overview></Overview>
              </Route>
              <Route path="/order-list">
                <OrderList></OrderList>
              </Route>
              <Route path="/order-details">
                <OrderDetails></OrderDetails>
              </Route>
              <Route path="/products/grid-view">
                <GridViewProducts></GridViewProducts>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
