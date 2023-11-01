import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { Logo_url } from "../utils/constant";
import uparrow from "../icons/Uparrow.png";
import downarrow from "../icons/Downarrow.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import search from "../icons/search-13.png"
import { toggleGptSearchView } from "../utils/gptSlice";
import {SUPPORTED_LANGUAGES} from "../utils/constant"
import { changeLanguage } from "../utils/ConfigSlice";
const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [errormessage, seterrormessage] = useState(null);
  const [showoverlay, setshowoverlay] = useState(false);
  



  //subscribe to user Store
  const user = useSelector((store) => store.user);

  const showgptsearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch action remove user will happen from onAuthStateChanged in Body.js
        // nav("/");
      })
      .catch((error) => {
        // An error happened.
        nav("/error");
        seterrormessage(error);
      });
  };
  //do all store updates here we dont need to write dispatch logic again and again

  //header can be loaded multiple times in a single session everytime useEffect is called onAuthstatechange is called when component is unmount we should unsubscribe also/cleaning inside useEffect returna cleanup function that is unsubscribe function
  //when component unmounts unsubscribing onAuthStateChanged return a function from here basically onAuthStateChanged returns a unsubscribe function
  //when we call unsubscribe function it will remove onAuthStateChanged from the browser

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin or signup case
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            emailid: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nav("/browse");
      } else {
        // User is signed out case
        dispatch(removeuser());
        nav("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleoverlay = () => {
    setshowoverlay(!showoverlay);
  };

  const handleGPTsearchclick=()=>{
    // Toggle search button
dispatch((toggleGptSearchView()))

  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      <div className="bg-black bg-opacity-80 border border-solid border-neutral-400 w-56 mt-7 pt-4">
      <div className="text-white m-4">
      <div className="flex">
      <img className="w-6 h-6" src={user?.photoURL} alt="usericon" />&nbsp;&nbsp;&nbsp;&nbsp;
      {user?.displayName}</div>
      <div className="cursor-pointer mt-2 hover:underline">Manage Profile</div>
      <div className="cursor-pointer mt-2 hover:underline">Transfer Profile</div>
      <div className="cursor-pointer mt-2 hover:underline">Account</div>
      <div className="cursor-pointer mt-2 hover:underline">Help Center</div>
      </div>
      <hr className="bg-slate-500"></hr>
      <div className="text-white cursor-pointer text-center p-2 hover:underline"  onClick={() => handleSignout()}>
        Sign out of Netflix
      </div>


      </div>
      
   
      </Popover.Body>
    </Popover>
  );

  const handleoptionschange = (e)=>{
    
      dispatch(changeLanguage(e.target.value));
    
   
  }
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={Logo_url} alt="logo" />

      {/* display only when signed in i.e when user is there*/}
      {user && (
        <div className="flex gap-6 pt-2">

        {/* onchange store language selected data also in redux store  */}
        {showgptsearch?<select onChange={(e)=>handleoptionschange(e)} className="p-2 bg-black opacity-60 text-white h-10">
        {
      SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
      ))
        } 
        </select>:<></>}
        {!showgptsearch?<img src={search} className="h-6 w-6 cursor-pointer" alt="search" onClick={()=>handleGPTsearchclick()}/>:<div className="text-white cursor-pointer" onClick={()=>handleGPTsearchclick()}>Home</div>}
          {/* <p className="text-white">Welcome {user?.displayName}</p> */}
          <img className="w-9 h-9" src={user?.photoURL} alt="usericon" />

          
{/* 
          {!showoverlay ? (
            <img
              src={uparrow}
              alt="up"
              className="h-3 w-4"
              onClick={() => handleoverlay()}
            />
          ) : (
            <img src={downarrow} alt="down" className="h-3 w-4" onClick={()=>setshowoverlay(false)}/>
          )} */}
          {/* <button
            className=" text-white h-8 font-bold"
            onClick={() => handleSignout()}
          >
            Sign Out
          </button> */}

          <div className="pt-2">
            
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose={true}>

              <img
              src={downarrow}
              alt="up"
              className="h-3 w-4 hover:rotate-180 cursor-pointer"
              onClick={() => handleoverlay()}
            />
              </OverlayTrigger>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
