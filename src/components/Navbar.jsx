import React from "react";
import blogo from "../assets/blogo.png";
import { useDispatch } from "react-redux";
import { InitEventBalls } from "../Redux/eventsReducer";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row  bg-pink-800 text-white rounded-2xl font-mono ">
      <div className="w-20 h-20">
        <img src={blogo} alt="logo" />
      </div>
      <div className="flex w-full flex-row-reverse text-3xl">
        <div className="flex flex-row py-5 px-24 space-x-10">
          <button onClick={() => dispatch(InitEventBalls())}>Evento 1</button>
          <h1>|</h1>
          <button onClick={() => dispatch(InitEventBalls())}>Evento 2</button>
          <h1>|</h1>
          <button onClick={() => dispatch(InitEventBalls())}>Evento 3</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
