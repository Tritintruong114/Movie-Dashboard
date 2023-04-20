import React from "react";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import {} from "firebase/auth";

function Success() {
  const navigate = useNavigate();
  const backtoDashBoard = () => {
    navigate("/login");
  };
  return (
    <div className="relative w-full h-full flex items-center justify-center font-poppins">
      <img
        src="https://images7.alphacoders.com/115/1152297.jpg"
        className="absolute z-0 object-cover h-full w-full"
      ></img>
      <div className="flex flex-col  h-2/4 md:h-2/4 md:w-2/4 xl:w-1/4 rounded-3xl text-center w-1/2 justify-center items-center gap-3 bg-white z-10 relative">
        <div className="relative w-3/4 h-1/4 flex items-center justify-center">
          <img
            className="absolute md:w-3/4 md:h-3/4 object-cover"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
        </div>
        <h1 className="font-bold text-md w-full">
          Welcome to the Netflix Dashboard
        </h1>
        <p className="text-green-600 font-bold">
          You account has been created!
        </p>
        <h1>{auth.currentUser?.displayName}</h1>
        <button
          onClick={() => backtoDashBoard()}
          className="px-3 bg-red-900 text-white rounded-full py-1"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Success;
