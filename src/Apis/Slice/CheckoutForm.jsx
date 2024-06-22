import { createSlice } from "@reduxjs/toolkit";

const CheckoutForm = createSlice({
    name: "CheckOut Form",
    initialState: {
        FirstName: "",
        CompanyName: "",
        StreetAddress: "",
        Apartment: "",
        City: "",
        Number: "",
        Email: "",
    },
    reducers: {
        SET_UPDATE_FORM: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        RESET_FORM: (state) => {
            state.FirstName = "";
            state.CompanyName = "";
            state.StreetAddress = "";
            state.Apartment = "";
            state.City = "";
            state.Number = "";
            state.Email = "";
        }

    }
});

export const { SET_UPDATE_FORM, RESET_FORM } = CheckoutForm.actions;
export default CheckoutForm.reducer;