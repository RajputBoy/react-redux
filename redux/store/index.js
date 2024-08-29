import { apiMiddleware } from "./middleware/api";
import cartReducer from "./slices/cartReducer";
import productsReducer from "./slices/productsReducer";
import wishListReducer from "./slices/wishListReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
   reducer: {
      products: productsReducer,
      cartItems: cartReducer,
      wishList: wishListReducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      apiMiddleware,
   ],
});
