import React, { useEffect, useState } from "react";

import { PizzaType } from "../types/app";
import { useAppSelector } from "../app/hooks";
import PizzaIndex from "../components/PizzaIndex";

import { Container } from "@material-ui/core";

/**
 * Home Page
 *
 * Displays the featured pizza and a small pizza index.
 *
 * @version   0.0.1
 * @page
 */

const Home = () => {
  // Elevar ao Redux
  const [featuredPizza, setFeaturedPizza] = useState<PizzaType | null>(null);

  const pizzas = useAppSelector((state) => state.order.pizzas);

  // const pizzas: any = useAllPizzas();

  useEffect(() => {
    !!pizzas &&
      setFeaturedPizza(pizzas.filter((pizza: PizzaType) => pizza.featured)[0]);
  }, [pizzas]);

  return (
    <div>
      {!pizzas || !featuredPizza ? (
        <div>loading...</div>
      ) : (
        <>
          <Container maxWidth="md">
            <PizzaIndex goToNextStep />
          </Container>
        </>
      )}
    </div>
  );
};

export default Home;
