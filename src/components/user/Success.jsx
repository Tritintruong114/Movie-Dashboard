import React from "react";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import {} from "firebase/auth";

function Success({ welcome }) {
  const navigate = useNavigate();
  const backtoDashBoard = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col h-full text-center w-full justify-center items-center gap-3">
        <h1 className="font-bold text-md w-full">
          Welcome to the Netflix Dashboard
        </h1>
        <p className="text-green-600">You account has been created!</p>
        <h1>{auth.currentUser?.displayName}</h1>
        <button
          onClick={() => backtoDashBoard()}
          className="px-3 bg-red-600 text-white rounded-full py-1"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Success;
