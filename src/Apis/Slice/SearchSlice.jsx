import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name: "Search",
    initialState: {
        searchQuery: "",
    },
    reducers: {
        SET_SEARCH_QUERY: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});
export const { SET_SEARCH_QUERY } = SearchSlice.actions;
export default SearchSlice.reducer;