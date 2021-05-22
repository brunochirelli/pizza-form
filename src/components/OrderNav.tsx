import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@material-ui/core";
import { useAppSelector } from "../app/hooks";
import { Check } from "@material-ui/icons";

/**
 * Order Navigation
 *
 * Order tracking and navigation for pizza custom form.
 *
 * @version   0.0.1
 * @component
 */

const OrderNav = () => {
  const { pizza, size, crust } = useAppSelector(
    (state) => state.order.order
  );

  return (
    <StyledNav>
      <Container maxWidth="sm">
        <ul>
          <li>
            <NavLink
              to="/pedido/recheio"
              className={pizza?.name && "filled"}
              activeClassName="active"
            >
              Recheio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pedido/massa"
              className={crust?.name && "filled"}
              activeClassName="active"
            >
              Massa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pedido/tamanho"
              className={size?.name && "filled"}
              activeClassName="active"
            >
              Tamanho
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pedido/ingredientes"
              activeClassName="optional"
            >
              Ingredientes
            </NavLink>
          </li>
        </ul>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    padding: 0;
    text-align: center;

    li {
      flex-grow: 1;
      list-style-type: none;

      a {
        position: relative;
        display: block;
        padding: 1rem 0.5rem;
        color: black;
        font-weight: bolder;
        text-decoration: none;
        background: #e9e5e5;

        &.active {
          color: white;
          background: #e40000;
        }

        &.filled {
          color: white;
          background: #0ab14d;
        }

        &.optional {
          color: white;
          background: #066ee6;
        }
      }

      &:first-of-type {
        a {
          border-radius: 0.5rem 0 0 0.5rem;
        }
      }

      &:last-of-type {
        a {
          border-radius: 0 0.5rem 0.5rem 0;
        }
      }
    }
  }
`;

export default OrderNav;
