import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSingleProduct = createAsyncThunk("FetchSingleProduct", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
});

const SingleData = createSlice({
    name: "singleproduct",
    initialState: {
        product: null,
        IsLoading: false,
        IsError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // FetchSingleProducts
        builder.addCase(FetchSingleProduct.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchSingleProduct.fulfilled, (state, action) => {
            state.product = action.payload;

            state.IsLoading = false;
            state.IsError = false;
        });
        builder.addCase(FetchSingleProduct.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });

    }
});

export default SingleData.reducer;