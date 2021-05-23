import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  status: "idle" | "loading" | "failed";
  user: {
    name?: string | null;
    email?: string | null;
    points: number;
  };
}

const initialState: UserState = {
  status: "idle",
  user: {
    name: null,
    email: null,
    points: 0,
  },
};

export const fetchUser = createAsyncThunk(
  "order/fetchUser",
  (userId: number) => {
    const url =
      process.env.NODE_ENV === "development"
        ? `http://localhost:3001/users/${userId}`
        : `https://my-json-server.typicode.com/brunochirelli/pizza-api/users/${userId}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePoints: (state, action: PayloadAction<any>) => {
      state.user.points += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        (state.status = "idle"), (state.user.name = action.payload.name);
        state.user.email = action.payload.email;
        state.user.points = action.payload.points;
      });
  },
});

export const { updatePoints } = userSlice.actions;

export default userSlice.reducer;
