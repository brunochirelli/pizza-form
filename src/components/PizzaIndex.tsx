import React from "react";
import { useAppSelector } from "../app/hooks";
import { PizzaType } from "../types/app";

import { Grid } from "@material-ui/core";

import ProductCard from "./ProductCard";

type PizzaIndexProps = {
  /** This prop drill to ProductCard to handle if it will be taken to the next
   * step section or not  */
  goToNextStep?: boolean;
};

const PizzaIndex = ({ goToNextStep }: PizzaIndexProps) => {
  const { pizzas } = useAppSelector((state) => state.order);

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        {pizzas.map((pizza: PizzaType) => (
          <Grid item xs={12} sm={6} key={pizza.id}>
            <ProductCard
              id={pizza.id}
              title={pizza.name}
              price={pizza.price}
              description={pizza.description}
              featuredImage={pizza.featuredImage}
              featuredPizza={pizza.featured}
              goToNextStep={goToNextStep}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PizzaIndex;
