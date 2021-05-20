import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

/**
 * Seção que torna visível o atual pedido do usuário.
 *
 * É um modal expansivo localizado a parte de baixo da tela.
 *
 * @returns component
 */
const MyPizza = () => {
  const order = useAppSelector((state) => state.order.order);

  if (!order.pizza.name)
    return <Link to="/pedido/recheio">Comece seu pedido</Link>;

  return (
    <div>
      <h2>{order.pizza.name}</h2>
      <div>{order.pizza.description}</div>

      {!!order.pizza.extras.length && (
        <div>
          {order.pizza.extras
            .filter((e: any) => e.check === true)
            .map((e: any) => (
              <div key={"mypizza" + e.id + e.name}>+ {e.name}</div>
            ))}
        </div>
      )}

      {!!order.crust && (
        <div>
          <h3>Massa</h3>
          <div>{order.crust.name}</div>
        </div>
      )}

      {!!order.size && (
        <div>
          <h3>Tamanho</h3>
          <div>{order.size.name}</div>
        </div>
      )}
    </div>
  );
};

export default MyPizza;
