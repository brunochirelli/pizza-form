import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CrustType, IPromotions, PizzaType, SizeType } from "../../types/app";

export interface ProductsState {
  status: "idle" | "loading" | "failed";
  pizzas: PizzaType[] | null;
  crusts: CrustType[] | null;
  sizes: SizeType[] | null;
  promotions: IPromotions[] | null;
}

const initialState: ProductsState = {
  status: "idle",
  pizzas: [],
  crusts: [],
  sizes: [],
  promotions: [],
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  () => {
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/products"
        : "https://my-json-server.typicode.com/brunochirelli/pizza-api/products";

    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.pizzas = [...action.payload.pizzas];
        state.crusts = [...action.payload.crusts];
        state.sizes = [...action.payload.sizes];
        state.promotions = [...action.payload.promotions];
      });
  },
});

export default productsSlice.reducer;
