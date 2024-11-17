import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, Checkout, Home, Login, Shoe, Shoes, SignUp } from "@routes/index";
// import ScrollToTop from "./utils/ScrollToTop";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/shoes", element: <Shoes />, },
  { path: "/shoes/:name", element: <Shoe />, },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ScrollToTop /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
