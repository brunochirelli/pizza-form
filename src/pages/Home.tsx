import React from "react";

import { useAppSelector } from "../app/hooks";

import { Container, LinearProgress } from "@material-ui/core";

import PizzaIndex from "../components/PizzaIndex";

/**
 * Home Page
 *
 * Displays the featured pizza and a small pizza index.
 *
 * @version   0.0.2
 * @page
 */

const Home = () => {
  const pizzas = useAppSelector((state) => state.order.pizzas);

  return !pizzas ? (
    <LinearProgress />
  ) : (
    <Container maxWidth="md">
      <PizzaIndex goToNextStep />
    </Container>
  );
};

export default Home;
