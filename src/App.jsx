// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FormFill from "./CRUD/form";
import Home from "./CRUD/common/home";
import Read from "./CRUD/operations/read";
import Create from "./CRUD/operations/create";
import Update from "./CRUD/operations/upadate";
import Delete from "./CRUD/operations/delete";
import Products from "./E-CART/components/Products/Products";
import SingleProduct from "./E-CART/components/cart/singleProduct";
import Netflix from "./INTRO/netflix";
// import AppLayout from "./components/common/AppLayout";
// import Home from "./components/specific/Home/Home";
// import Adopt from "./components/specific/Adopt/Adopt";
// import Donate from "./components/specific/Donate/Donate";
// import Socials from "./components/specific/Socials/Socials";
// import Contact from "./components/specific/Contact/Contact";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },

  //       {
  //         path: "/adopt",
  //         element: <Adopt />,
  //       },

  //       {
  //         path: "/donate",
  //         element: <Donate />,
  //       },

  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },

  //       {
  //         path: "/find-us",
  //         element: <Socials />,
  //       },
  //     ],
  //   },
  // ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: '/read',
      element: <Read />
    },

    {
      path: '/create',
      element: <Create />
    },

    {
      path: '/update',
      element: <Update />
    },

    {
      path: '/delete',
      element: <Delete />
    },

    {
      path: '/products',
      element: <Products />
    },

    {
     path: '/cart',
      element: <SingleProduct />
    }, 

    {
      path:'/intro',
      element: <Netflix />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
