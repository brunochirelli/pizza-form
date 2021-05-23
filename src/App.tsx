import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useAppDispatch } from "./app/hooks";

import Layout from "./components/Layout";
import { fetchAllProducts } from "./features/products/productsSlice";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";

/**
 * App Component
 *
 * Main routing and layout positioning.
 *
 * @version   0.0.3
 * @component
 */

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/pedido" component={Order} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
