import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const [errormessage, seterrormessage] = useState(null);
  //subscribe to user Store
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch action remove user will happen from onAuthStateChanged in Body.js
        nav("/");
      })
      .catch((error) => {
        // An error happened.
        nav("/error");
        seterrormessage(error);
      });
  };
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* display only when signed in i.e when user is there*/}
      {user&&<div className="flex gap-10 p-2">
      <p>Welcome {user?.displayName}</p>
        <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />

        <button
          className=" text-white h-8 font-bold"
          onClick={() => handleSignout()}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
