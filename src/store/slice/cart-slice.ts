import { CartState, Item } from "./interface";
import { createSlice } from "@reduxjs/toolkit";

const initalCartState: CartState = {
  items: [],
  //   {
  //     id: 'c1',
  //     title: 'Sushi',
  //     quantity: 0,
  //     total: 0,
  //     price: 0,

  //   }
  totalQuantity: 0,
  changed: false,
};

type Action = { payload: Item };

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    removeItemCart(state: CartState, action) {
      const idd = action.payload;
      const existingItem = state.items.find((item) => item.id === idd);
      state.totalQuantity--;
      if (existingItem?.quantity === 1) {
        state.items.filter((item) => item.id !== idd);
      } else {
        existingItem!.quantity--;
        existingItem!.total = existingItem!.total - existingItem!.price;
      }
    },
    //fix anction type here
    addItemCart(state: CartState, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
        state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          total: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }
    },
    replaceCart(state: CartState, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
        }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
