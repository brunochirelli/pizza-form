import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, FormControlLabel, Switch } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleIngredient, toggleExtra } from "../features/order/orderSlice";

import StepWrapper from "./StepWrapper";

/**
 * Ingredients Step
 *
 * This component need a huge refactor.
 * -  Products needs to be implemented correctly
 * -
 *
 * @version   0.0.2
 * @component
 */
const PizzaIngredients = () => {
  const dispatch = useAppDispatch();
  // const ingredients = useAppSelector((state) => state.order.ingredients);
  const order = useAppSelector((state) => state.order.order);

  const handleChange = (ingredient: any, type?: "extra" | "ingredient") => {
    if (type === "extra") dispatch(toggleExtra(ingredient));

    if (type === "ingredient") dispatch(toggleIngredient(ingredient));

    return;
  };

  return (
    <StepWrapper title="Ingredientes da pizza escolhida">
      <Container maxWidth="sm">
        <ul>
          {order.pizza?.ingredients.map((ingredient: any) => (
            <li key={ingredient.id + ingredient.name}>
              <FormControlLabel
                control={
                  <Switch
                    checked={ingredient.check}
                    name="ingredient"
                    onChange={() => handleChange(ingredient, "ingredient")}
                  />
                }
                label={ingredient.name}
              />
            </li>
          ))}
        </ul>

        <h2>Ingredientes Adicionais</h2>
        <ul>
          {order.pizza?.extras.map((extra: any) => (
            <li key={extra.name + extra.id}>
              <FormControlLabel
                control={
                  <Switch
                    checked={extra.check}
                    onChange={() => handleChange(extra, "extra")}
                    name="extra"
                  />
                }
                label={extra.name}
              />
            </li>
          ))}
        </ul>

        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          component={Link}
          to="/pedido/checkout"
        >
          Concluir Pedido
        </Button>
      </Container>
    </StepWrapper>
  );
};

export default PizzaIngredients;
