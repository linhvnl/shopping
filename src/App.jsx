// import React/Hook/...
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// import sử dụng REDUX STORE
import store from "./store/store";

// import component LAYOUT
import Layout from "./components/layout/Layout";

// import component PAGE
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import DetailPage from "./pages/detail/DetailPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HistoryPage from "./pages/history/HistoryPage";
import HistoryDetailPage from "./pages/historyDetail/HistoryDetailPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

// import function loaders
import loaders from "./utils/loaders";

//////////////////////
// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: loaders.homeLoader,

    children: [
      // shop - products
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: loaders.detailLoader,
      },

      // cart
      { path: "cart", element: <CartPage /> },

      // checkout
      { path: "checkout", element: <CheckoutPage /> },

      // history
      { path: "history", element: <HistoryPage /> },
      { path: "history/:orderId", element: <HistoryDetailPage /> },

      // auth
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

//////////////////////
// function component
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default App;
