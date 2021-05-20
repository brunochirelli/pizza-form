import React from "react";
import { Link } from "react-router-dom";

type FeaturedPizzaProps = {
  title: string;
  price: number;
  description: string;
  image?: string;
};

const FeaturedPizza = ({
  title,
  price,
  description,
  image,
}: FeaturedPizzaProps) => {
  return (
    <section>
      <h2>Pizza do dia</h2>
      <p>Compre a pizza do dia e acumule pontos</p>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <Link to="/pedido">Comprar pizza do dia</Link>
      <span>ou</span>
      <Link to="/pedido/recheio">Monte sua pizza agora</Link>
    </section>
  );
};

export default FeaturedPizza;
