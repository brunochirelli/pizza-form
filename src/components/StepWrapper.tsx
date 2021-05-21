import React, { ReactNode } from "react";
import { Container } from "@material-ui/core";

type StepWrapperProps = {
  children: ReactNode;
};

/**
 * Step Wrapper
 *
 * Component to handle the container of wich step to avoid repeating code.
 *
 * @version   0.0.1
 * @component
 */

const StepWrapper = ({ children }: StepWrapperProps) => {
  return (
    <Container maxWidth="sm">
      <section>{children}</section>
    </Container>
  );
};

export default StepWrapper;
