import { Container } from "@material-ui/core";
import React from "react";

import { useAppSelector } from "../app/hooks";
import PizzaIndex from "./PizzaIndex";

import StepWrapper from "./StepWrapper";

/**
 * Pizza Toppings
 *
 * Step section to select pizza toppings.
 *
 * @version   0.0.1
 * @component
 */

const Toppings = () => {
  const { order } = useAppSelector((state) => state.order);

  return (
    <StepWrapper
      title="Recheios"
      nextStepUrl="/pedido/massa"
      nextStepCta="Escolha a massa"
      condition={!!order?.pizza?.name}
    >
      <Container maxWidth="md">
        <PizzaIndex />
      </Container>
    </StepWrapper>
  );
};

export default Toppings;
