import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        CartItems: JSON.parse(localStorage.getItem('Cart')) || [],
    },
    reducers: {
        SetCartItems: (state, action) => {
            // state.CartItems.push(action.payload);
            state.CartItems = action.payload;
            localStorage.setItem('Cart', JSON.stringify(state.CartItems));
        },
        RemoveFromCartItems: (state, action) => {
            state.CartItems = state.CartItems.filter((item) => item.id !== action.payload);
            localStorage.setItem('Cart', JSON.stringify(state.CartItems));
        },
    }
});
export const { SetCartItems, RemoveFromCartItems } = CartSlice.actions;
export default CartSlice.reducer;