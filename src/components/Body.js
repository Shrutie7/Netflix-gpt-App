import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  

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


  //do all store updates here we dont need to write dispatch logic again and again
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin or signup case
        const { uid, email, displayName,photoURL } = user;
        dispatch(adduser({uid:uid,emailid :email,displayName:displayName,photoURL:photoURL}));
        
      } else {
        // User is signed out case
        dispatch(removeuser());
      }
    });
  }, []);

  return (
    // provide routing using RouterProvider

    <RouterProvider router={appRouter} />
  );
};

export default Body;
