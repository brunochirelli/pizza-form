import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { addCrust } from "../features/order/orderSlice";

const PizzaCrusts = () => {
  const dispatch = useAppDispatch();
  const crusts = useAppSelector((state) => state.order.crusts);
  const order = useAppSelector((state) => state.order.order);

  const handleChange = (e: any) => {
    dispatch(addCrust(e.target.value));
  };

  return (
    <div>
      <h2>Massa</h2>
      <ul>
        {crusts.map((crust) => (
          <li key={crust.name + crust.id}>
            <label>
              <input
                type="radio"
                value={crust.id}
                checked={
                  !!order.crust && crust.id === order.crust.id ? true : false
                }
                name="crust"
                id={crust.pizzaName}
                onChange={handleChange}
              />
              {crust.name}
            </label>
            <p>{crust.description}</p>
          </li>
        ))}
      </ul>

      {!!order.crust?.name && (
        <Link to="/pedido/tamanho">Ir Para Escolha do Tamanho</Link>
      )}

      <Link to="/pedido/recheio">Voltar para a escolha do recheio</Link>
    </div>
  );
};

export default PizzaCrusts;
