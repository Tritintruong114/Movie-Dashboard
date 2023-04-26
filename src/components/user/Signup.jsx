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
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const firebaseError = {
    "auth/invalid-email": "Your Email is incorrect",
  };

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
      console.log(user);
    } catch (error) {
      console.log(error.code);
      setError(firebaseError[error.code]);
    }
  };

  return (
    <div className="font-poppins w-full h-full justify-center  flex text-center items-center gap-3">
      <img
        src="https://images7.alphacoders.com/115/1152297.jpg"
        className="absolute z-0 object-cover h-full w-full"
      ></img>
      <div className="h-2/4 w-3/4 md:w-2/4 xl:w-1/4  flex flex-col rounded-3xl justify-center items-center gap-3 z-10 bg-white">
        <div className="relative w-3/4 h-1/4 flex items-center justify-center">
          <img
            className="absolute md:w-3/4 md:h-3/4 object-cover"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
        </div>
        <h1 className="text-xl font-bold">Sign Up</h1>
        <p>{error}</p>
        <div className="flex flex-col gap-3 ">
          <input
            className="focus:outline-none border-b-4 focus:border-red-950"
            placeholder="abc@gmail.com"
            type="email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            value={registerEmail}
          />
          <input
            className="focus:outline-none border-b-4 focus:border-red-950"
            placeholder="Must be 6 character"
            type="password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            value={registerPassword}
          />
        </div>
        <button
          className="bg-red-900 text-white px-3 rounded-full py-1"
          onClick={register}
        >
          Register
        </button>
      </div>
      {isRegisted ? <Success /> : null}
    </div>
  );
}

export default Signup;
