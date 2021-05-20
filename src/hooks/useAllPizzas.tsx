import { useState, useEffect } from "react";

const useAllPizzas = () => {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((res) => setPizzas(res));
  }, []);

  return pizzas;
};

export default useAllPizzas;
