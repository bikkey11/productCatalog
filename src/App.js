import HomePage from "./components/homepage";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import ProductDetail from "./components/productDetail";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/productDetail/:productId",
    element: (
      <div>
        <Navbar/>
        <ProductDetail/>
      </div>
    )

  }
  ,{
    path:"/shoppingCart",
    element:(
      <div>
        <Navbar/>
        <ShoppingCart/>
      </div>
    )
  }
])

export default router;
