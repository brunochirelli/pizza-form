import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addPizza } from "../features/order/orderSlice";

const Toppings = () => {
  // Posso depois usar o state reconciler para armazenar a pizza no redux store como fiz no wedding app
  const pizzas = useAppSelector((state) => state.order.pizzas);
  const order = useAppSelector((state) => state.order.order);

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    dispatch(addPizza(e.target.value));
  };

  return (
    <div>
      <h2>Recheios</h2>
      {/* Quando selecionar a pizza quero que o state do app atualize e popule a pizza escolhida para obter mais dados */}
      {pizzas && (
        <ul>
          {pizzas.map((pizza: any) => (
            <li key={pizza.id}>
              <label>
                <input
                  type="radio"
                  value={pizza.id}
                  name="pizza"
                  checked={
                    !!order.pizza && pizza.id === order.pizza.id ? true : false
                  }
                  id={pizza.name}
                  onChange={handleChange}
                />
                {pizza.name}
              </label>
            </li>
          ))}
        </ul>
      )}

      {order.pizza.name && (
        <Link to="/pedido/massa">Ir Para Escolha da Massa</Link>
      )}
    </div>
  );
};

export default Toppings;
