
import { getDiscountedPrice } from "../Components/ProductCards/ProductCards";


// calculateTotalPrice
export const calculateTotalPrice = (CartItems) => {
    return CartItems.reduce((total, item) => {
        const discountedprice = getDiscountedPrice(item.price, item.discountPercentage);
        return total + (discountedprice * item.Quantity);
    }, 0);
};




