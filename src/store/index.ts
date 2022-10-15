import cartSlice  from "./slice/cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user-slice";

const store = configureStore({
    reducer: { 
        cart: cartSlice.reducer, 
        user: userSlice.reducer 
    },
});

export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>;// Here we export the store's state


