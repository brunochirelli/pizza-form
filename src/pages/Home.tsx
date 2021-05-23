import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAllProducts } from "../features/products/productsSlice";

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
  const dispatch = useAppDispatch();
  const pizzas = useAppSelector((state) => state.order.pizzas);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return !pizzas ? (
    <LinearProgress />
  ) : (
    <Container maxWidth="md">
      <PizzaIndex goToNextStep />
    </Container>
  );
};

export default Home;
