import React from "react";
import { PizzaType } from "../types/app";
import { useAppSelector } from "../app/hooks";

import ProductCard from "./ProductCard";

const PizzaIndex = () => {
  const pizzas = useAppSelector((state) => state.order.pizzas);

  return (
    <div>
      <ul>
        {pizzas.map((pizza: PizzaType) => (
          <li key={pizza.id}>
            <ProductCard
              title={pizza.name}
              price={pizza.price}
              description={pizza.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaIndex;
