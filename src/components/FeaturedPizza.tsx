import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { Button, Container, Typography } from "@material-ui/core";
import { useAppDispatch } from "../app/hooks";
import { addPizza } from "../features/order/orderSlice";

type FeaturedPizzaProps = {
  id: number;
  title: string;
  price: number;
};

/**
 * Featured Pizza Component
 *
 *
 * @version   0.0.1
 * @component
 */

const FeaturedPizza = ({ id, title, price }: FeaturedPizzaProps) => {
  const dispatch = useAppDispatch();

  const handleFeaturePizza = () => {
    dispatch(addPizza({ id, type: "featured" }));
  };

  return (
    <StyledContainer maxWidth="md">
      <div className="feat-image">
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="pizza do dia"
        />
      </div>

      <div className="feat-content">
        <Typography variant="caption">Pizza do Dia</Typography>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1" gutterBottom>
          Compre a pizza do dia e acumule pontos para trocar
        </Typography>
        <Typography variant="h6">R$ {price},00</Typography>
      </div>

      <div className="cta">
        <div>
          <Button
            component={Link}
            to="/pedido/checkout"
            variant="contained"
            color="secondary"
            disableElevation
            onClick={handleFeaturePizza}
          >
            Comprar pizza do dia
          </Button>
        </div>
        <span>ou</span>
        <div>
          <Button
            component={Link}
            to="/pedido/recheio"
            variant="contained"
            color="primary"
            disableElevation
          >
            Monte sua pizza agora
          </Button>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  margin-top: 1rem;

  .feat-image {
    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
      object-position: center;
      overflow: hidden;
      border-radius: 1rem;

      @media screen and (min-width: 900px) {
        height: 50vh;
      }
    }
  }

  .feat-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;

    span,
    h2 {
      text-transform: uppercase;
    }

    h2 {
      font-weight: bolder;
    }

    p {
      max-width: 15.6rem;
    }
  }

  .cta {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    text-align: center;
  }
`;

export default FeaturedPizza;
