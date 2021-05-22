import { Container } from "@material-ui/core";
import React from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addCrust } from "../features/order/orderSlice";
import RadioChoice from "./RadioChoice";

import StepWrapper from "./StepWrapper";

/**
 * Pizza Crust Step
 *
 * Step to select the crust of the pizza.
 * Just to rember, all the names are inspired in Domino's
 *
 * @version   0.0.1
 * @component
 */

const PizzaCrusts = () => {
  const dispatch = useAppDispatch();
  const { crusts, order } = useAppSelector((state) => state.order);

  const handleChange = (e: any) => {
    dispatch(addCrust(e.target.value));
  };

  return (
    <StepWrapper
      title="Massa"
      prevStepCta="Recheio"
      prevStepUrl="/pedido/recheio"
      nextStepCta="Tamanho"
      nextStepUrl="/pedido/tamanho"
      condition={!!order.crust}
    >
      <Container maxWidth="sm">
        <ul>
          {crusts.map((crust) => (
            <li key={crust.name + crust.id}>
              <RadioChoice
                checked={
                  !!order.crust && crust.id === order.crust.id ? true : false
                }
                name={crust.name}
                id={crust.id}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      </Container>
    </StepWrapper>
  );
};

export default PizzaCrusts;
