import { createSlice } from "@reduxjs/toolkit";

const CONTACT_SLICE = createSlice({
    name: "Contact",
    initialState: {
        fname: "",
        email: "",
        phone: "",
        message: "",
    },
    reducers: {
        SET_UPDATE_CONTACT: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        RESET_CONTACT_DATA: (state, action) => {
            state.fname = "";
            state.email = "";
            state.phone = "";
            state.message = "";
        }
    }
});

export const { SET_UPDATE_CONTACT, RESET_CONTACT_DATA } = CONTACT_SLICE.actions;
export default CONTACT_SLICE.reducer;