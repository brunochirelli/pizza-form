import React from "react";
import { NavLink } from "react-router-dom";

const OrderNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/pedido/recheio" activeStyle={{ color: "red" }}>
            Recheio
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedido/massa" activeStyle={{ color: "red" }}>
            Massa
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedido/tamanho" activeStyle={{ color: "red" }}>
            Tamanho
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedido/ingredientes" activeStyle={{ color: "red" }}>
            Ingredientes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default OrderNav;
