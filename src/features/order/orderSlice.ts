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
  return fetch("http://localhost:3001/products")
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

      // // needs better typing to avoid undefined
      const current = state.pizzas?.find((pizza) => pizza.id === parseInt(id));

      state.order.pizza = current;
    },

    addCrust: (state, action: PayloadAction<any>) => {
      const current: any = state.crusts?.find(
        (crust) => crust.id === parseInt(action.payload)
      );

      state.order.crust = current;
    },

    addSize: (state, action: PayloadAction<any>) => {
      const current: any = state.sizes?.find(
        (size) => size.id === parseInt(action.payload)
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

    /** USER */
    login: (state) => {
      state.user.name = "Bruno";
      state.user.email = "bruno@chirelli.com.br";
    },
    processOrder: (state) => {
      const dayPizzaBonus = state.promotions?.find(
        (promo: any) => promo.name === "dayPizzaBonus"
      );

      if (state.order?.pizza?.featured) {
        state.user.points += dayPizzaBonus?.points;
      }

      state.order.pizza = null;
      state.order.crust = null;
      state.order.size = null;
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
        state.promotions = [...action.payload.promotions];
      });
  },
});

export const {
  addPizza,
  addCrust,
  addSize,
  toggleIngredient,
  toggleExtra,
  login,
  processOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
