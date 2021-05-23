import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { processOrder, resetOrder } from "../features/order/orderSlice";

import {
  Button,
  Card,
  Container,
  Modal,
  Slide,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { updatePoints } from "../features/user/userSlice";
import { IPromotions } from "../types/app";

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
  const { order, products } = useAppSelector((state) => state);

  const [open, setOpen] = useState(false);

  // const handleLogin = () => {
  //   // temporary just to mock a login session
  //   dispatch(login());
  // };

  const handlePayment = () => {
    // get the actual valid promotion
    const promotion = products.promotions?.find(
      (promo: IPromotions) => promo.name === "dayPizzaBonus"
    );

    console.log(order.pizza?.featured);

    // extract and verify points
    const points = order.pizza?.featured ? promotion?.points : 0;

    // update points
    dispatch(updatePoints(points));
    dispatch(processOrder());
    dispatch(resetOrder());
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
                {/* TOPPING */}
                <img src={order.pizza?.featuredImage} alt={order.pizza?.name} />
                <div className="item">
                  <Typography variant="h6" component="h2">
                    Pizza de {order.order.pizza?.name}
                  </Typography>
                  <Typography>{order.order.pizza?.description}</Typography>
                </div>

                {/* CRUST */}
                {order.crust && (
                  <div className="item">
                    <Typography variant="h6" component="h2">
                      Massa {order.crust?.name}
                    </Typography>
                    <Typography>{order.crust?.description}</Typography>
                  </div>
                )}

                {/* SIZE */}
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
