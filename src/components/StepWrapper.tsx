import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button, Container } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";

type StepWrapperProps = {
  children: ReactNode;
  /** Title of the step section */
  title: string;
  /** Boolean to define the condition to display the buttons */
  condition?: boolean;
  /** Call-to-action to next step */
  nextStepCta?: string;
  /** URL to next step */
  nextStepUrl?: "/pedido/massa" | "/pedido/tamanho" | "/pedido/ingredientes";
  /** Call-to-action to previous step */
  prevStepCta?: string;
  /** URL to previous step */
  prevStepUrl?: "/pedido/recheio" | "/pedido/massa" | "/pedido/tamanho";
};

/**
 * Step Wrapper
 *
 * Component to handle the container of wich step to avoid repeating code.
 *
 * @version   0.0.2
 * @component
 */

const StepWrapper = ({
  children,
  title,
  condition,
  nextStepCta,
  nextStepUrl,
  prevStepCta,
  prevStepUrl,
}: StepWrapperProps) => {
  return (
    <>
      <Container maxWidth="sm">
        <StyledNav>
          {prevStepUrl && condition && (
            <Button startIcon={<ArrowBack />} component={Link} to={prevStepUrl}>
              {prevStepCta}
            </Button>
          )}
          <div className="title">{title}</div>
          {nextStepUrl && condition && (
            <Button
              endIcon={<ArrowForward />}
              component={Link}
              to={nextStepUrl}
            >
              {nextStepCta}
            </Button>
          )}
        </StyledNav>
      </Container>

      <StyledSection>{children}</StyledSection>
    </>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
  }

  .title {
    font-weight: bolder;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledSection = styled.section`
  margin: 2rem auto;

  /* Main styles for each step */
  ul {
    padding: 0;
    list-style-type: none;

    li {
      margin-bottom: 1rem;
    }
  }
`;

export default StepWrapper;
