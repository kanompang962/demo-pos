import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { getStorage } from "../services/service";
import { rows } from "../contents/content";

const initeState = {
  cart: rows,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initeState);

  useEffect(() => {
    if (getStorage()) state.cart = getStorage();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  // เพิ่มสินค้า
  const addQuantity = (item) => {
    dispatch({ type: "ADD_QUANTITY", payload: item });
  };
  // เคลียร์สินค้า
  const removeQuantity = (item) => {
    dispatch({ type: "REMOVE_QUANTITY" });
  };
  // เพิ่มลดจำนวน +-
  const toggledQuantity = (id, type) => {
    dispatch({ type: 'TOGGLE_QUANTITY', payload: { id, type } });
};

  return (
    <CartContext.Provider value={{ ...state, addQuantity, removeQuantity,toggledQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
