import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CrustType, Ingredient, PizzaType, SizeType } from "../../types/app";

export interface OrderState {
  status: "idle" | "loading" | "failed";
  user: {
    name?: string | null;
    email?: string | null;
    points: number;
  };
  order: {
    pizza?: PizzaType | null;
    crust?: CrustType | null;
    size?: SizeType | null;
    ingredients?: Ingredient | null;
  };
  pizzas: PizzaType[];
  crusts: CrustType[];
  sizes: SizeType[];
  /** has "possibly undefined" problem" */
  promotions: any;
}

const initialState: OrderState = {
  status: "idle",
  user: {
    name: null,
    email: null,
    points: 0,
  },
  order: {
    pizza: null,
    crust: null,
    size: null,
    ingredients: null,
  },
  pizzas: [],
  crusts: [],
  sizes: [],
  promotions: [],
};

export const fetchProducts = createAsyncThunk("order/fetchProducts", () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/products"
      : "https://my-json-server.typicode.com/brunochirelli/pizza-api/products";
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
});

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    /** ORDER */
    addPizza: (
      state,
      action: PayloadAction<{ id: any; type?: "featured" }>
    ) => {
      const { id } = action.payload;

      const current = state.pizzas?.find(
        (pizza: PizzaType) => pizza.id === parseInt(id)
      );

      state.order.pizza = current;
    },

    addCrust: (state, action: PayloadAction<any>) => {
      const current: any = state.crusts?.find(
        (crust: any) => crust.id === parseInt(action.payload)
      );

      state.order.crust = current;
    },

    addSize: (state, action: PayloadAction<any>) => {
      const current: any = state.sizes?.find(
        (size: any) => size.id === parseInt(action.payload)
      );
      state.order.size = current;
    },

    toggleIngredient: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const ingredients: any = state.order?.pizza?.ingredients;

      const updated = ingredients.find(
        (ingredient: any) => ingredient.id === id
      );

      updated.check = !updated.check;
    },

    toggleExtra: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const extras: any = state.order?.pizza?.extras;

      const updated = extras.find((extra: any) => extra.id === id);

      updated.check = !updated.check;
    },

    processOrder: (state) => {
      const dayPizzaBonus = state.promotions?.find(
        (promo: any) => promo.name === "dayPizzaBonus"
      );

      if (state.order?.pizza?.featured) {
        state.user.points += dayPizzaBonus?.points;
      }
    },
    resetOrder: (state) => {
      state.order.pizza = null;
      state.order.crust = null;
      state.order.size = null;
    },
  },
});

export const {
  addPizza,
  addCrust,
  addSize,
  toggleIngredient,
  toggleExtra,
  processOrder,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
