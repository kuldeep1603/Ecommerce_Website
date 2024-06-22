import { configureStore } from "@reduxjs/toolkit";

// slice 
import DataSliceReducer from "./Slice/Data";
import FilterDataReducer from "./Slice/FilterData";
import SingleDataReducer from "./Slice/SingleData";
import WishlistSliceReducer from "./Slice/Wishlistslice";
import CartSliceReducer from "./Slice/CartSlice";
import FormSliceReducer from "./Slice/FormSlice";
import LoginSliceReducer from "./Slice/LoginSlice";
import CheckoutFormReducer from "./Slice/CheckoutForm";
import SearchSliceReducer from "./Slice/SearchSlice";
import CONTACT_SLICEReducer from "./Slice/Contact";


const store = configureStore({
    reducer: {
        Data: DataSliceReducer,
        FilterData: FilterDataReducer,
        SingleData: SingleDataReducer,
        Wishlist: WishlistSliceReducer,
        Cart: CartSliceReducer,
        Form: FormSliceReducer,
        Login: LoginSliceReducer,
        Checkout: CheckoutFormReducer,
        Search: SearchSliceReducer,
        Contact: CONTACT_SLICEReducer,
    }
});
export default store;