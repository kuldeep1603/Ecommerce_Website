import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const FetchProduct = createAsyncThunk("FetchProduct", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.products;
});

export const FetchCategoryProducts = createAsyncThunk("FetchCategoryProducts", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.products;
});



const DataSlice = createSlice({
    name: "Products",
    initialState: {
        Products: [],
        CategoryProducts: [],
        IsLoading: false,
        IsError: false,
        CategoryValue: "vehicle",
    },
    reducers: {
        SetCategoryValue: (state, action) => {
            state.CategoryValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        // FetchProduct
        builder.addCase(FetchProduct.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchProduct.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.Products = action.payload;
        });
        builder.addCase(FetchProduct.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });

        // FetchCategoryProducts
        builder.addCase(FetchCategoryProducts.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchCategoryProducts.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.CategoryProducts = action.payload;
        });
        builder.addCase(FetchCategoryProducts.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });
    }
});
export const { SetCategoryValue } = DataSlice.actions
export default DataSlice.reducer;