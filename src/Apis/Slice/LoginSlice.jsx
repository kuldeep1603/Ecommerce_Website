import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        SET_LOGIN: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        }
    }
})
export const { SET_LOGIN } = LoginSlice.actions;
export default LoginSlice.reducer;