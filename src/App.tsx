import "./static/css/global.css";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useAppDispatch } from "./app/hooks";

import Layout from "./components/Layout";
import { fetchProducts } from "./features/order/orderSlice";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";

/**
 * App Component
 *
 * Main routing and layout positioning.
 *
 * @version   0.0.2
 * @component
 */

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/pedido" component={Order} />
          <Route path="/sobre" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
