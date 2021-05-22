import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OrderRoute from "../routes/OrderRoute";

import MyPizza from "../components/MyPizza";
import OrderNav from "../components/OrderNav";
import PizzaCrusts from "../components/PizzaCrusts";
import PizzaIngredients from "../components/PizzaIngredients";
import PizzaSizes from "../components/PizzaSizes";
import PizzaToppings from "../components/PizzaToppings";
import Checkout from "./Checkout";

/**
 * Order Page and Router
 *
 * This page handles all requests and pages after "/pedido".
 *
 * Here we wrap some routes with the Order Route HoC to prevent that some steps
 * to be reached before the topping was chosen to separate each step in their
 * own route.
 *
 * @version   0.0.1
 * @page
 */

const Order = () => {
  return (
    <>
      {/* Layout components */}
      <OrderNav />
      {/* <MyPizza /> */}

      <Switch>
        <Route
          path="/pedido"
          exact
          render={() => <Redirect to="/pedido/recheio" />}
        />

        <Route
          path="/pedido/recheio"
          exact
          component={PizzaToppings}
        />

        <OrderRoute
          path="/pedido/massa"
          exact
          component={PizzaCrusts}
        />

        <OrderRoute
          path="/pedido/tamanho"
          exact
          component={PizzaSizes}
        />

        <OrderRoute
          path="/pedido/ingredientes"
          exact
          component={PizzaIngredients}
        />

        <Route path="/pedido/checkout" exact component={Checkout} />

        <Route path="/pedido/:any">
          <Redirect to="/pedido/recheio" />
        </Route>
      </Switch>
    </>
  );
};

export default Order;
