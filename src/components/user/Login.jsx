import React from "react";
import { Link } from "react-router-dom";

export function InputFeild({ inputLabel, name, type }) {
  return (
    <div className="relative py-1">
      <h1>{inputLabel}</h1>
      <input
        id={`${name}`}
        type={`${type}`}
        autoComplete="off"
        className={`peer focus:outline-none duration-300 focus:border-red-900 focus:border-b-4 py-1 border-b transition-colors`}
      ></input>
      <label
        forhtml={`${name}`}
        className={`absolute left-0 text-gray-600 top-1 duration-300 peer-focus:text-xs cursor-text peer-focus:-top-3 transition-all`}
      ></label>
    </div>
  );
}

function Login() {
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
          <Link>
            <p className="hover:text-red-600">Creat a account</p>
          </Link>
          <div className="w-full relative">
            <img
              className="absolute"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            ></img>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-1/4">
          <InputFeild type="text" name={"username"} inputLabel={"User name"} />
          <InputFeild
            type="password"
            name={"password"}
            inputLabel={"Password"}
          />
          <Link>
            <p className="text-sm text-red-900">Forgot Password?</p>
          </Link>
        </div>

        <div className="flex flex-col w-full gap-3 items-center justify-center">
          <button className="w-2/5 sm:w-2/5  md:w-2/5 rounded-full py-1 bg-red-900 text-white">
            Sign in
          </button>
          <button className="w-full text-center flex items-center justify-center rounded-full py-1 text-red-900">
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
