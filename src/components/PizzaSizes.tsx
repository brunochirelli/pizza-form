import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addSize } from "../features/order/orderSlice";

import { Container } from "@material-ui/core";

import RadioChoice from "./RadioChoice";
import StepWrapper from "./StepWrapper";
import { SizeType } from "../types/app";

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
  const { sizes } = useAppSelector((state) => state.products);
  const { size: orderSize } = useAppSelector((state) => state.order);

  const handleChange = (e: any) => {
    const currentSize = sizes?.find(
      (size) => size.id === parseInt(e.target.value)
    );

    dispatch(addSize(currentSize));
  };

  return (
    <StepWrapper
      title="Tamanho"
      prevStepCta="Massa"
      prevStepUrl="/pedido/massa"
      nextStepCta="Ingredientes"
      nextStepUrl="/pedido/ingredientes"
      condition={!!orderSize?.name}
    >
      <Container maxWidth="sm">
        <ul>
          {sizes?.map((size: SizeType) => (
            <li key={size.name + size.id}>
              <RadioChoice
                checked={orderSize?.id === size.id ? true : false}
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
