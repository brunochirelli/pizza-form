import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { useAppDispatch } from "./app/hooks";

import Layout from "./components/Layout";
import { fetchProducts } from "./features/order/orderSlice";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/pedido">
            <Order />
          </Route>
          <Route path="/sobre" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
