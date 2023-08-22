import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header.js";
import Body from "./Components/Body";
import Footer from "./Components/footer";
import { IMG_CDN_Link } from "./Constants.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu"
import Profile from "./Components/Profile"
import { lazy, Suspense } from "react";
import Shimmer from "./Components/Shimmer"
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux"
import store from "./utils/store"
import Cart from "./Components/Cart"

const Instamart = lazy(()=> import("./Components/Instamart"))
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ashwin",
    email:"Ashwin78@gmail.com"
  })
  return (
    <>
      <Provider store ={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <HeaderComponent />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
