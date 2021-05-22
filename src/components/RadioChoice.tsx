import React from "react";

import { Card, CardContent, Radio, Typography } from "@material-ui/core";
import styled from "styled-components";

type RadioChoiceProps = {
  /** handleChange function from parent component */
  onChange: (e: any) => void;
  /** pizza name */
  name: string;
  /** pizza id */
  id: number;
  /** checked logic - need refactoring */
  checked: boolean;
  /** pizza featured image */
  image?: string;
};

/**
 * Radio Choice
 *
 * This component is meant to hold all the styles for a radio choice on the
 * pizza custom form.
 *
 * @version   0.0.1
 * @component
 */

const RadioChoice = ({
  onChange,
  name,
  id,
  checked,
  image,
}: RadioChoiceProps) => {
  return (
    <StyledCard>
      <div className="action-area">
        <CardContent className="content">
          {/* Value should be {id} to be identify by Redux - needs refactoring */}
          <Typography variant="h6" component="label" id={name}>
            <Radio
              inputProps={{ "aria-labelledby": `${name}` }}
              checked={checked}
              value={id}
              name="pizza"
              onChange={onChange}
            />
            {name}
          </Typography>
        </CardContent>
        {image && <img src={image} alt="" />}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  .action-area {
    display: flex;
    justify-content: space-between;

    img {
      width: 6em;
      height: 4em;
      object-fit: cover;
      object-position: center;
    }
  }

  .content {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 0 1rem;

    label {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }
  }
`;

export default RadioChoice;
