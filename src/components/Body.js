import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    // this browse route is authenticated if u are authenticated then only u move to this route otherwise u dont
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
 
  return (
    // provide routing using RouterProvider

  
    <RouterProvider router={appRouter} />
  );
};

export default Body;
