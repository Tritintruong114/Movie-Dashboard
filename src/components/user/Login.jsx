import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(null);
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);

  const loginWithGoogle = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("display name", result.user.displayName);
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    console.log(loginEmail, "Testing");
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("email", loginEmail);
      setIsUser(true);
      navigate("/");
    } catch (error) {
      setInvalidUser(error.message);
    }
  };

  return (
    <div className="flex  h-full font-poppins w-3/4 flex-col xl:flex-row items-center justify-center">
      <div className="opacity-0 absolute xl:relative xl:opacity-100 xl:w-3/4">
        This is netflix login dashboard for SM MD XL screen
      </div>

      <div className="h-full flex flex-col xl:w-1/4  items-center justify-center">
        <div className="flex flex-col h-1/4 text-left justify-center pb-12">
          <h1 className="font-bold text-xl">Welcome to Netflix,</h1>
          <h1 className="font-bold">Sign In to Continue.</h1>
          <p className="text-sm text-opacity-60 text-gray-700">
            Don't have a account ?
          </p>
          <Link to={"/signup"}>
            <p className="hover:text-red-600">Creat a account</p>
          </Link>
          <div className="w-full relative">
            <img
              className="absolute"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            ></img>
          </div>
        </div>

        <div className="flex flex-col gap-6 h-1/4 items-center justify-center">
          {invalidUser ? (
            <h1 className="text-red-600 font-bold text-md">User Not Found</h1>
          ) : null}
          <input
            className="focus:outline-none border-b focus:border-b-4 focus:border-red-950"
            type="text"
            placeholder="User name"
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <input
            className="focus:outline-none border-b focus:border-b-4 focus:border-red-950"
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <Link>
            <p className="text-sm text-red-900">Forgot Password?</p>
          </Link>
        </div>
        <div className="flex flex-col w-full gap-3 items-center justify-center">
          <button
            onClick={() => login()}
            className="w-2/5 sm:w-2/5  md:w-2/5 rounded-full py-1 bg-red-900 text-white"
          >
            Sign in
          </button>
          <button
            onClick={loginWithGoogle}
            className="w-full text-center flex items-center justify-center rounded-full py-1 text-red-900"
          >
            <img
              className="h-8"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            ></img>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
