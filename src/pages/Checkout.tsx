import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { processOrder, login } from "../features/order/orderSlice";

import {
  Button,
  Card,
  Container,
  Modal,
  Slide,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

/**
 * Checkout Page
 *
 * Checkout modal with order informations.
 *
 * This component should be refactor in future do the UX limitations of desktop users.
 *
 * @version   0.0.1
 * @page
 */
const Checkout = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { user, order } = useAppSelector((state) => state.order);

  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    // temporary just to mock a login session
    dispatch(login());
  };

  const handlePayment = () => {
    dispatch(processOrder());

    history.push("/");
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <Container maxWidth="sm">
            <StyledCard style={{ height: "100%" }}>
              <Typography variant="h5" component="h1">
                Resumo do Pedido
              </Typography>
              <div className="details">
                <img src={order.pizza?.featuredImage} alt={order.pizza?.name} />
                <div className="item">
                  <Typography variant="h6" component="h2">
                    Pizza de {order.pizza?.name}
                  </Typography>
                  <Typography>{order.pizza?.description}</Typography>
                </div>
                {order.crust && (
                  <div className="item">
                    <Typography variant="h6" component="h2">
                      Massa {order.crust?.name}
                    </Typography>
                    <Typography>{order.crust?.description}</Typography>
                  </div>
                )}
                {order.size && (
                  <div className="item">
                    <Typography variant="h6" component="h2">
                      Tamanho
                    </Typography>
                    <Typography>{order.size?.name}</Typography>
                  </div>
                )}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePayment}
                  size="large"
                  style={{ marginBottom: "1rem" }}
                  fullWidth
                >
                  Concluir pedido
                </Button>
                <div>
                  <Typography variant="caption">
                    A princípio o fluxo usa um usuário logado
                  </Typography>
                </div>
              </div>
            </StyledCard>
          </Container>
        </Slide>
      </Modal>
    </>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;

  .details {
    max-width: 15rem;
    margin: 0 auto;

    img {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
      object-position: center;
    }
  }

  .item {
    margin-bottom: 1rem;

    h2 {
      color: var(--brown);
      font-weight: bolder;
    }
  }
`;

export default Checkout;
