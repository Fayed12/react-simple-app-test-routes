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
    path: "/",
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout></MainLayout>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      {
        id:"rootproducts",
        path: "/products",
        element: <Products></Products>,
        loader: productsLoader,
        children: [
          {
            path: "productdetails/:id",
            element: <ProductDetails></ProductDetails>,
          },
        ],
      },
    ],
  },
]);
export default router;