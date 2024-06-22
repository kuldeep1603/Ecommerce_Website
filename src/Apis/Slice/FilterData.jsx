import { createSlice } from "@reduxjs/toolkit";

const FilterData = createSlice({
    name: "FilterData",
    initialState: {
        DiscountedProducts: [],
        SellingProducts: [],
    },
    reducers: {
        SetDisountedData: (state, action) => {
            state.DiscountedProducts = action.payload;
        },
        SetSellingProducts: (state, action) => {
            state.SellingProducts = action.payload;
        }
    }
});
export const { SetDisountedData, SetSellingProducts } = FilterData.actions;
export default FilterData.reducer;