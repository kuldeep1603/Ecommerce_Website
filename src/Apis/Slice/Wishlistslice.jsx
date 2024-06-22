import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "Wishlist",
    initialState: {
        wishlistItems: JSON.parse(localStorage.getItem('Wishlist')) || [],
    },
    reducers: {
        SetwishlistItems: (state, action) => {
            // state.wishlistItems = action.payload;
            state.wishlistItems.push(action.payload);
            localStorage.setItem('Wishlist', JSON.stringify(state.wishlistItems));
        },
        RemoveFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
            localStorage.setItem('Wishlist', JSON.stringify(state.wishlistItems));
        },
    }
});

export const { SetwishlistItems, RemoveFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;