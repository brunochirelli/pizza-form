import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Button, Card, Container, Typography } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";

import { useAppSelector } from "../app/hooks";

/**
 * Pizza Excerpt Section
 *
 * Modal that could be expanded to show order details.
 *
 * This component will be improved due UX on desktop.
 *
 * @version   0.0.1
 * @component
 */
const MyPizza = () => {
  const location = useLocation();
  const { order } = useAppSelector((state) => state.order);

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log("rendered");
    return () => {
      setOpen(false);
    };
  }, [location]);

  return (
    <StyledSection>
      <Container maxWidth="sm">
        <Card className={open ? "card open" : "card"}>
          <div className="content">
            <Typography variant="h6">Pizza de {order.pizza?.name}</Typography>

            {open ? (
              <>
                {/* Crust */}
                <div>
                  <Typography variant="h6">Massa</Typography>
                  <Typography variant="body1">
                    {order.crust?.name ? (
                      order.crust.name
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        component={Link}
                        to="/pedido/massa"
                      >
                        Escolha a massa
                      </Button>
                    )}
                  </Typography>
                </div>

                {/* Size */}
                <div>
                  <Typography variant="h6">Tamanho</Typography>
                  <Typography variant="body1">
                    {order.size?.name ? (
                      order.size.name
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        component={Link}
                        to="/pedido/tamanho"
                      >
                        Escolha o tamanho
                      </Button>
                    )}
                  </Typography>
                </div>

                {/* Checkout button */}
                <Button disabled={!order.size && !order.crust}>Checkout</Button>
              </>
            ) : (
              // closed starts
              <Typography variant="caption" noWrap>
                {order.crust?.name && (
                  <span>Massa {order.crust.name.toLowerCase()} </span>
                )}
                {order.size?.name && (
                  <span>tamanho {order.size.name.toLowerCase()}</span>
                )}
              </Typography>
            )}
          </div>
          <div>
            {open ? (
              <Button
                size="small"
                endIcon={<ExpandLess />}
                onClick={handleClick}
              >
                fechar
              </Button>
            ) : (
              <Button
                size="small"
                endIcon={<ExpandLess />}
                onClick={handleClick}
              >
                mais
              </Button>
            )}
          </div>
        </Card>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: fixed;
  bottom: 1rem;
  z-index: 100;
  width: 100%;

  .card {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0;
    padding: 2rem 1rem;
    transition: height 0.2s ease;

    svg {
      transform: rotate(0);
      transition: transform 0.5s ease;
    }

    &.open {
      z-index: 10;
      align-items: flex-start;
      height: 80vh;
      padding: 1rem;
      background: white;
      transition: all 0.5s ease;

      svg {
        transform: rotate(180deg);
      }

      &::before {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1 !important;
        display: block;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        content: " ";
      }
    }
  }
`;

export default MyPizza;
