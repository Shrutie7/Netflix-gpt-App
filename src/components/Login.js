import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { adduser } from "../utils/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { BG_URL, Photo_url } from "../utils/constant";
const Login = () => {
  // by default signin for will come
  const [isSigninform, setisSigninform] = useState(true);
  const [isLearnmore, setisLearnmore] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [focuspwd, setfocuspwd] = useState(false);
  const [errormessage, seterrormessage] = useState(null);


const dispatch = useDispatch();

  
  const user = useSelector((store)=>store.user)

  //create reference for email and password
  const emailref = useRef(null);
  const pwdref = useRef(null);
  const fullnameref = useRef(null);

  const toggleHandler = () => {
    // toggle feature
    setisSigninform(!isSigninform);
  };

  const handlelearnmore = () => {
    setisLearnmore(!isLearnmore);
  };

  const handlebuttonclick = () => {
    let message = "";
    if (isSigninform) {
      message = checkValidData(emailref.current.value, pwdref.current.value);
      seterrormessage(message ? message : "");
    }

    if (isSigninform === false) {
      message = checkValidData(
        emailref.current.value,
        pwdref.current.value,
        fullnameref.current.value
      );
      seterrormessage(message ? message : "");
    }

   

    // if (message === null) {
    //   //signin signup logic here
    //  }
    // doabove or below approach
    if (message) return;
    //after this write signin signup logic
   if(!isSigninform){
    //signup logic.....
    createUserWithEmailAndPassword(auth, emailref.current.value, pwdref.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    //as soon as new user is signed up/registered calling update profile with name and photo url and then we will update store once again here with displayname and photourl also 
    updateProfile(user, {
      displayName:fullnameref.current.value, photoURL: Photo_url
    }).then(() => {
      // Profile updated!
      //once profile is updated then navigate
    

    //update store again with displayName and photourl
    // only user will not have updated value here user is the updated user which comes from auth.currentUser (make sure user is updated user not the older value)
    const { uid, email, displayName,photoURL } = auth.currentUser;
    dispatch(adduser({uid:uid,emailid :email,displayName:displayName,photoURL:photoURL}));
    // nav("/browse");
    }).catch((error) => {
      // An error occurred
      seterrormessage(error.message)
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
  });
   }
   else{
    //signinlogic

    signInWithEmailAndPassword(auth, emailref.current.value, pwdref.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // nav("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  
    seterrormessage(errorCode+"-"+errorMessage)
  });
   }


    
  };

  const handlepasswordonChange = (e) => {
    // console.log(e.target.value);
  };
  const handleemailonChange = (e) => {
    // console.log(e.target.value);
  };

  const handleShowpassword = () => {
    setshowpassword(!showpassword);
  };
  const handlefocuspwd = (e) => {
    setfocuspwd(true);
  };
  useEffect(() => {
    setisLearnmore(false);
    seterrormessage("");
  }, [isSigninform]);
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
        alt="background"
          className="h-screen w-screen"
          src={BG_URL}
        />
      </div>

      <form
        className="bg-black bg-opacity-80 p-12 absolute rounded-md w-2/6 my-28 mx-auto right-0 left-0 "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-white font-semibold text-3xl  py-4">
          {isSigninform ? "Sign In" : "Sign Up"}
        </div>
        {!isSigninform ? (
          <input
            type="text"
            placeholder="Full Name"
            ref={fullnameref}
            className="p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12 "
          />
        ) : (
          <></>
        )}
        {/* now reference email and password */}
        <input
          type="text"
          placeholder="Email or phone number"
          ref={emailref}
          onChange={(e) => handleemailonChange(e)}
          className="p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12 "
        />
        <div className="flex relative">
          <input
            type={showpassword ? "text" : "password"}
            placeholder="Password"
            ref={pwdref}
            onChange={(e) => handlepasswordonChange(e)}
            onFocus={(e) => handlefocuspwd(e)}
            className="p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12"
          />
          <button
            className="text-zinc-500 bg-transparent absolute top-7 right-5"
            onClick={(e) => {
              handleShowpassword(e);
            }}
          >
            {showpassword ? "HIDE" : "SHOW"}
          </button>
        </div>

        <p className="text-orange-400 text-sm py-2">
          {errormessage ? errormessage : ""}
        </p>
        <button
          className="bg-red-600  my-8 text-white rounded-md font-semibold w-full h-12 text-center"
          onClick={(e) => handlebuttonclick(e)}
        >
          {isSigninform ? "Sign In" : "Sign Up"}
        </button>

        <div className="py-4 text-zinc-500 flex">
          {isSigninform ? "New to Netflix?" : "Already Registered"}
          &nbsp;
          <div
            className="text-white cursor-pointer hover:underline"
            onClick={() => toggleHandler()}
          >
            {isSigninform ? "Sign up now" : "Sign In now"}
          </div>
        </div>
        {isSigninform ? (
          <p className="text-zinc-500 text-sm block">
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot .
            </span>
            &nbsp;
            <button
              className="text-blue-800 hover:underline"
              onClick={(e) => handlelearnmore(e)}
            >
              {isLearnmore ? "" : "Learn More."}
            </button>
            {isLearnmore && isSigninform ? (
              <span className="text-zinc-500 text-sm">
                The information collected by Google reCAPTCHA is subject to the
                Google &nbsp;
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Privacy Policy{" "}
                </a>
                and
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {" "}
                  Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google)
              </span>
            ) : (
              <></>
            )}
          </p>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default Login;
