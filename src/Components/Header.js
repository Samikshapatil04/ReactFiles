import React from "react";
import "./Header.css";
import Cart from "./Cart"

const Header = () => {
  return (
    // <div>{name}</div>
    <div className="main-division">
      <div className="top-box">
        <h1>Amazon</h1>
        <input placeholder="Search..." className="input"></input>
        < Cart/>
      </div>
    </div>
  );
};
export default Header;
