import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name: "Form",
    initialState: {
        name: "",
        email: "",
        password: "",
    },
    reducers: {
        SetFormData: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        ResetFormData: (state, action) => {
            state.email = "";
            state.name = "";
            state.password = "";
        }
    }
})

export const { SetFormData, ResetFormData } = FormSlice.actions;
export default FormSlice.reducer;