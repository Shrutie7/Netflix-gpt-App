import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoreInfoc from "./MoreInfoc";
import GptSearchPage from "./GPTSearch";
import MoreInfoTwin from "./MoreInfoTwin";
import Header from "./Header";
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
    {
    path: "/browse/moreinfo/:movId",
    element: <MoreInfoc />,
  },
  {
    path: "/browse/gptsearch",
    element: <GptSearchPage />,
  },
  {
    path: "/browse/moreinfotwin/:movId",
    element: <MoreInfoTwin />,
  }
  ]);
 
  return (
    // provide routing using RouterProvider

  
    <RouterProvider router={appRouter} />
  );
};

export default Body;
