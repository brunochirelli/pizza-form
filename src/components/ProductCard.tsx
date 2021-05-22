import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Box, Card, IconButton, Typography } from "@material-ui/core";
import { Add, Check, Star } from "@material-ui/icons";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addPizza } from "../features/order/orderSlice";

type ProductProps = {
  title: string;
  price: number;
  description: string;
  id: number;
  featuredPizza: boolean;
  featuredImage?: string;
  /**
   * This boolean is forward by ProductIndex component.
   *
   * It's meant to reuse the component in home and toppings section.
   * Could be refactored.
   * */
  goToNextStep?: boolean;
};

/**
 * Product Card Component
 *
 * Displays product single
 *
 * @version   0.0.1
 * @component
 */

const ProductCard = ({
  title,
  description,
  featuredImage,
  price,
  id,
  featuredPizza,
  goToNextStep,
}: ProductProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const orderId = useAppSelector((state) => state.order.order?.pizza?.id);

  const handleClick = (nextStep?: boolean) => {
    dispatch(addPizza({ id }));

    if (nextStep) history.push("/pedido/massa");
  };

  return (
    <StyledDiv>
      <Card
        className={`card ${featuredPizza && "featured"} ${
          orderId === id && "selected"
        }`}
      >
        <Box className="image" onClick={() => handleClick(goToNextStep)}>
          <img src={featuredImage} alt={title} />
        </Box>

        <div className="info">
          <div className="rating">
            <Star />
            <span>4,8</span>
          </div>
          <div className="title">
            <Typography
              variant="h6"
              className="pizza-title"
              onClick={() => handleClick(goToNextStep)}
            >
              {title}
            </Typography>
            <Typography variant="body2" noWrap>
              {description}
            </Typography>
          </div>
          <div className="card-footer">
            <span className="price">R${price}</span>
            <IconButton
              className="button"
              aria-label="personalizar"
              onClick={() => handleClick(goToNextStep)}
            >
              {orderId === id ? <Check /> : <Add />}
            </IconButton>
          </div>
        </div>
      </Card>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  & .featured {
    position: relative;
    border: 2px solid var(--brown);

    &::before {
      position: absolute;
      top: -0.5rem;
      right: -0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem;
      height: 3.5rem;
      padding: 0.5rem;
      color: white;
      font-weight: bolder;
      font-size: 0.65rem;
      line-height: 1;
      text-align: center;
      text-transform: uppercase;
      background: var(--brown);
      border-radius: 50%;
      transform: rotate(25deg);
      content: "Pizza do Dia";
    }
  }

  & .selected {
    position: relative;
    border: 2px solid var(--green);

    .button {
      color: white !important;
      background: var(--green) !important;
    }

    &::before {
      position: absolute;
      top: -0.5rem;
      right: -0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem;
      height: 3.5rem;
      padding: 0.5rem;
      color: var(--yellow);
      font-weight: bolder;
      font-size: 0.65rem;
      line-height: 1;
      text-align: center;
      text-transform: uppercase;
      background: var(--green);
      border-radius: 50%;
      transform: rotate(25deg);
      content: "Quero Esse!";
    }
  }

  .card {
    position: relative;
    display: flex;
    width: 100%;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06);
    transition: background 0.2s ease;

    .image {
      cursor: pointer;

      img {
        width: 8.75rem;
        height: 8.85rem;
        object-fit: cover;
        object-position: center;
      }
    }

    .rating {
      display: flex;
      align-items: center;
      color: var(--yellow);
      font-size: 1rem;

      span {
        padding: 0 0.25rem;
        color: gray;
        font-size: 0.8rem;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      width: 100%;
      padding: 0.75rem;
      overflow: hidden;

      .pizza-title {
        color: var(--brown);
        font-weight: bolder;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        font-weight: bolder;
        font-size: 1rem;
      }

      .button {
        width: 2.25rem;
        height: 2.25rem;
        background: var(--yellow);
      }
    }
  }

  &:hover {
    .card {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export default ProductCard;
