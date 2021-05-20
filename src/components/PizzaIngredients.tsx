import React from "react";
import { Redirect } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleIngredient, toggleExtra } from "../features/order/orderSlice";

const PizzaIngredients = () => {
  const dispatch = useAppDispatch();
  // const ingredients = useAppSelector((state) => state.order.ingredients);
  const order = useAppSelector((state) => state.order.order);

  const handleChange = (ingredient: any, type?: "extra" | "ingredient") => {
    if (type === "extra") dispatch(toggleExtra(ingredient));

    if (type === "ingredient") dispatch(toggleIngredient(ingredient));

    return;
  };

  return (
    <div>
      {/* {console.log(order)} */}
      <h2>Ingredientes padrão da pizza {order.pizza.pizzaName}</h2>
      <ul>
        {order.pizza.ingredients.map((ingredient: any) => (
          <li key={ingredient.id + ingredient.name}>
            <label>
              <input
                type="checkbox"
                name="ingredient"
                value={ingredient.name}
                id={ingredient.id}
                checked={ingredient.check}
                onChange={() => handleChange(ingredient, "ingredient")}
              />
              {ingredient.name}
            </label>
          </li>
        ))}
      </ul>
      <h2>Ingredientes Adicionais</h2>
      <ul>
        {order.pizza.extras.map((extra: any) => (
          <li key={extra.name + extra.id}>
            <label>
              <input
                type="checkbox"
                name="extra"
                value={extra.name}
                id={extra.id}
                checked={extra.check}
                onChange={() => handleChange(extra, "extra")}
              />
              {extra.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaIngredients;
