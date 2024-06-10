import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Layout, ProductDetail } from "pages";
import { ProductList } from "components";
import { earphonesData, headphonesData, speakersData } from "data";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/headphones',
        element: <ProductList products={headphonesData} heading="headphones" />
      },
      {
        path: '/speakers',
        element: <ProductList products={speakersData} heading="speakers" />
      },
      {
        path: '/earphones',
        element: <ProductList products={earphonesData} heading="earphones" />
      },
      {
        path: "/:type/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
