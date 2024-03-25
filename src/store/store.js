import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./sliceProduct";

// store
const store = configureStore({
  reducer: { product: productReducer },
});

export default store;
