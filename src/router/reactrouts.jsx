import About from "../pages/about-page/about";
import Home from "../pages/home-page/home";
import Contact from "../pages/contact/contact";
import MainLayout from "../layout/loggedinaLyout";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/error-page/errorPage";
import LoginPage from "../pages/login-page/login";
import ProtectedRoute from "../components/ProtectedRoute";
import Products from "../pages/products/products";
import productsLoader from "../loaders/productsLoader";
import ProductDetails from "../components/productDetails";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        id: "rootproducts",
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        children: [
          {
            path: "productdetails/:id",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
