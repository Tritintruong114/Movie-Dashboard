import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
//onAuthStateCHanged is checking is the User are logged yet.
import { auth } from "../../firebase/firebase-config";
import { Outlet, useNavigate } from "react-router-dom";
import Success from "./Success";
function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isRegisted, setIsRegisted] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setIsRegisted(true);
      setUser(user);
      navigate("/success");
      setRegisterEmail("");
      setRegisterPassword("");
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="font-poppins h-full justify-center  text-center items-center gap-3">
      <div className="h-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <div className="flex flex-col gap-3 ">
          <input
            className="focus:outline-none border-b-4 focus:border-red-950"
            placeholder="Email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            value={registerEmail}
          />
          <input
            className="focus:outline-none border-b-4 focus:border-red-950"
            placeholder="Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            value={registerPassword}
          />
        </div>
        <button
          className="bg-red-600 text-white px-3 rounded-full py-1"
          onClick={register}
        >
          Register
        </button>
      </div>
      {isRegisted ? <Success welcome={user.registerEmail} /> : null}
    </div>
  );
}

export default Signup;
