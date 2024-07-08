import { useContext } from "react";
import { cartcontex } from "../Contextos/cartcontext";

export const useCart = () => {
    const context = useContext(cartcontex);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context
}