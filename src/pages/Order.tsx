import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import OrderNav from "../components/OrderNav";
import PizzaCrusts from "../components/PizzaCrusts";
import PizzaIngredients from "../components/PizzaIngredients";
import PizzaSizes from "../components/PizzaSizes";
import PizzaToppings from "../components/PizzaToppings";
import OrderRoute from "../routes/OrderRoute";

const Order = () => {
  return (
    <Router>
      <OrderNav />
      <Switch>
        <Route path="/pedido/recheio" exact component={PizzaToppings} />

        <OrderRoute path="/pedido/massa" exact component={PizzaCrusts} />

        <OrderRoute path="/pedido/tamanho" exact component={PizzaSizes} />

        <OrderRoute
          path="/pedido/ingredientes"
          exact
          component={PizzaIngredients}
        />

        <Route path="/pedido/:any">
          <Redirect to="/pedido/recheio" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Order;
