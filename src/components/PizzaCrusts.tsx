import React from "react";

import { Container } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CrustType } from "../types/app";
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
  const { crusts } = useAppSelector((state) => state.products);
  const { crust: orderCrust } = useAppSelector((state) => state.order);

  const handleChange = (e: any) => {
    const selectedCrust = crusts?.find(
      (crust) => crust.id === parseInt(e.target.value)
    );
    dispatch(addCrust(selectedCrust));
  };

  return (
    <StepWrapper
      title="Massa"
      prevStepCta="Recheio"
      prevStepUrl="/pedido/recheio"
      nextStepCta="Tamanho"
      nextStepUrl="/pedido/tamanho"
      condition={!!orderCrust}
    >
      <Container maxWidth="sm">
        <ul>
          {crusts?.map((crust: CrustType) => (
            <li key={crust.name + crust.id}>
              <RadioChoice
                checked={crust.id === orderCrust?.id}
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
