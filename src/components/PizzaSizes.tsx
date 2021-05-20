import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addSize } from "../features/order/orderSlice";

const PizzaSizes = () => {
  const dispatch = useAppDispatch();
  const sizes = useAppSelector((state) => state.order.sizes);
  const order = useAppSelector((state) => state.order.order);

  const handleChange = (e: any) => {
    dispatch(addSize(e.target.value));
  };

  return (
    <div>
      <h2>Tamanhos</h2>
      <ul>
        {sizes.map((size) => (
          <li key={size.name + size.id}>
            <label>
              <input
                type="radio"
                value={size.id}
                checked={
                  !!order.size && size.id === order.size.id ? true : false
                }
                name="size"
                id={size.name}
                onChange={handleChange}
              />
              {size.name}
            </label>
          </li>
        ))}
      </ul>

      {!!order?.size?.name && (
        <Link to="/pedido/ingredientes">Escolha os Ingredientes</Link>
      )}
      <Link to="/pedido/massa">Voltar para escolha da massa</Link>
    </div>
  );
};
export default PizzaSizes;
