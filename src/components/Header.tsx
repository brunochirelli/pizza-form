import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";

import logo from "../static/images/logo.png";

/**
 * Header Component
 *
 * Displays the main menu, user profile bonus and cart
 *
 * @version   0.0.1
 * @component
 */

const Header = () => {
  const { points } = useAppSelector((state) => state.order.user);

  return (
    <StyledHeader>
      <Container maxWidth="md">
        <nav aria-label="menu principal">
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="voltar para home" />
              </Link>
            </li>

            <li className="points">pontos: {points}</li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  nav {
    width: 100%;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 1rem;

      li {
        list-style-type: none;

        &.points {
          padding: 0.5rem;
          font-weight: bolder;
          background: var(--yellow);
          border-radius: 1rem;
        }
      }
    }
  }
`;

export default Header;
