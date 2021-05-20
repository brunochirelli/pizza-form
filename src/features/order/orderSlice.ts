import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../../app/store";
// import { fetchCount } from "./pizzaAPI";

export interface OrderState {
  status: "idle" | "loading" | "failed";
  user: string | null;
  email: string | null;
  order: {
    pizza: any | null;
    crust: any | null;
    size: any | null;
    ingredients: any | null;
  };
  pizzas: any[];
  crusts: any[];
  sizes: any[];
}

const initialState: OrderState = {
  status: "idle",
  user: null,
  email: null,
  order: {
    pizza: [],
    crust: null,
    size: null,
    ingredients: null,
  },
  pizzas: [],
  crusts: [],
  sizes: [],
};

export const fetchProducts = createAsyncThunk("order/fetchProducts", () => {
  return fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));
});

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<any>) => {
      let current = state.pizzas?.find(
        (pizza) => pizza.id === Number(action.payload)
      );
      state.order.pizza = current;
    },
    addCrust: (state, action: PayloadAction<any>) => {
      let current = state.crusts?.find(
        (crust) => crust.id === Number(action.payload)
      );
      state.order.crust = current;
    },
    addSize: (state, action: PayloadAction<any>) => {
      let current = state.sizes?.find(
        (size) => size.id === Number(action.payload)
      );
      state.order.size = current;
    },
    toggleIngredient: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const ingredients = state.order.pizza.ingredients;

      let updated = ingredients.find((ingredient: any) => ingredient.id === id);

      updated.check = !updated.check;
    },
    toggleExtra: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const extras = state.order.pizza.extras;

      let updated = extras.find((extra: any) => extra.id === id);

      updated.check = !updated.check;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.pizzas = [...action.payload.pizzas];
        state.crusts = [...action.payload.crusts];
        state.sizes = [...action.payload.sizes];
      });
  },
});

export const { addPizza, addCrust, addSize, toggleIngredient, toggleExtra } =
  orderSlice.actions;

export default orderSlice.reducer;
