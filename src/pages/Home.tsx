import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import FeaturedPizza from "../components/FeaturedPizza";
import PizzaIndex from "../components/PizzaIndex";

import { PizzaType } from "../types/app";

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
          <FeaturedPizza
            title={featuredPizza.name}
            price={featuredPizza.price}
            description={featuredPizza.description}
            image={featuredPizza.featuredImage}
          />

          <PizzaIndex />
        </>
      )}
    </div>
  );
};

export default Home;
