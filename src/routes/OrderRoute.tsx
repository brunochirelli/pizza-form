import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useAppSelector } from "../app/hooks";

interface OrderRouteProps extends RouteProps {
  /**
   * Need help to type it better
   */
  component?: any;
}

/**
 * Higher-Order-Component to prevent advance steps without the base topping has
 * been chosen.
 *
 * @version 0.0.1
 * @returns HOC wrapping Route
 */
const OrderRoute = ({
  component: Component,
  ...rest
}: OrderRouteProps) => {
  const { pizza } = useAppSelector((state) => state.order.order);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!pizza?.name) {
          return <Redirect to="/pedido/recheio" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default OrderRoute;
