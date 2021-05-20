import React from "react";

type ProductProps = {
  title: string;
  price: number;
  description: string;
  featuredImage?: string;
};
const ProductCard = ({
  title,
  description,
  featuredImage,
  price,
}: ProductProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
