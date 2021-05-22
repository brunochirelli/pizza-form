import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addSize } from "../features/order/orderSlice";
import RadioChoice from "./RadioChoice";
import StepWrapper from "./StepWrapper";

/**
 * Pizza Sizes Step
 *
 * Component to hold sizes options.
 *
 * @version   0.0.1
 * @component
 */

const PizzaSizes = () => {
  const dispatch = useAppDispatch();
  const { sizes, order } = useAppSelector((state) => state.order);

  const handleChange = (e: any) => {
    dispatch(addSize(e.target.value));
  };

  return (
    <StepWrapper
      title="Tamanho"
      prevStepCta="Massa"
      prevStepUrl="/pedido/massa"
      nextStepCta="Ingredientes"
      nextStepUrl="/pedido/ingredientes"
      condition={!!order.size}
    >
      <Container maxWidth="sm">
        <ul>
          {sizes.map((size) => (
            <li key={size.name + size.id}>
              <RadioChoice
                checked={
                  !!order.size && size.id === order.size.id
                    ? true
                    : false
                }
                name={size.name}
                id={size.id}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      </Container>
    </StepWrapper>
  );
};
export default PizzaSizes;
