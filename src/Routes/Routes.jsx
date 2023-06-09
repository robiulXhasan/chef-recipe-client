import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Recipe from "../Pages/Recipe/Recipe";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-recipe-hunter-server-robiulxhasan.vercel.app/chef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoutes>
            <Recipe></Recipe>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-recipe-hunter-server-robiulxhasan.vercel.app/chef/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
