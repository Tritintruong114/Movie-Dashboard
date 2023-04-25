import React from "react";

function ButtonPrimay() {
  return (
    <button className="bg-red-800 text-white hover:bg-white transform ease-in-out hover:scale-150 hover:text-red-900 font-pps  px-6 py-1 rounded-xl">
      Click
    </button>
  );
}

function Test() {
  return (
    <div className="bg-rose-400 w-full h-screen flex items-center justify-center">
      <div className="w-3/4 sm:w-1/2 md:w-3/4 h-1/4 bg-slate-400 flex items-center justify-center gap-3">
        <ButtonPrimay />
      </div>
    </div>
  );
}

export default Test;
