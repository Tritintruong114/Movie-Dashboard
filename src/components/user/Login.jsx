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
    } catch (error) {}
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
    <div className="h-screen w-screen relative flex justify-center items-center">
      <img
        src="https://images7.alphacoders.com/115/1152297.jpg"
        className="absolute h-full w-full object-cover"
      ></img>
      <div className="h-full w-full absolute bg-black opacity-60 md:opacity-30 xl:opacity-0"></div>
      <div className="flex h-full font-poppins w-full flex-col xl:flex-row items-center justify-center p-3">
        <div className="opacity-0 absolute xl:relative  xl:w-2/4 z-10 bg-white">
          This is netflix login dashboard for SM MD XL screen
        </div>

        <div className="h-3/4 sm:h-3/4 xl:h-2/4 w-full md:w-2/4 rounded-xl flex flex-col xl:w-1/4 items-center justify-center z-10 backdrop-blur text-white">
          <div className="w-full h-full absolute bg-white opacity-10 rounded-3xl z-0"></div>
          <div className="flex flex-col h-1/4 justify-center items-center z-10">
            <h1 className="font-bold text-xl md:text-3xl xl:text-2xl">
              Welcome to Netflix,
            </h1>
            <h1 className="font-bold">Sign In to Continue.</h1>
            <div className="w-full relative flex justify-center items-center">
              <img
                className="h-full w-1/2"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              ></img>
            </div>
          </div>

          <div className="flex flex-col w-full relative gap-3 h-1/5 items-center justify-center z-10">
            {invalidUser ? (
              <h1 className="font-bold text-md absolute top-0">
                User Not Found
              </h1>
            ) : null}
            <input
              className="focus:outline-none border-b w-3/5 rounded-xl pl-3 py-1 text-black"
              type="email"
              placeholder="User name"
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
            <input
              className="focus:outline-none border-b w-3/5  rounded-xl pl-3 py-1  text-black"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
          </div>
          <div className="z-20 text-center">
            <p className="text-sm text-opacity-60 ">Don't have a account ?</p>
            <Link to={"/signup"}>
              <p className="hover:text-red-600 cursor-pointer font-bold pb-3 z-20">
                Creat a account
              </p>
            </Link>
          </div>

          <div className="flex flex-col w-full gap-3 items-center justify-center z-10">
            <button
              onClick={() => login()}
              className="w-3/5 sm:w-3/5  md:w-3/5 rounded-full py-2 bg-red-900 text-white"
            >
              Sign in
            </button>
            <button
              onClick={loginWithGoogle}
              className="w-3/5 md:w-3/5 xl:w-3/5 text-sm text-center flex items-center justify-center rounded-full py-1 bg-white text-black"
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
    </div>
  );
}

export default Login;
