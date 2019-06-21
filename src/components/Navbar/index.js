import React from "react";
import "./index.css";

function Navbar(props) {
  return (
    <ul className="nav fixed-top py-4 justify-content-between">
      <li className="nav-item ml-5">
        <h2 className="text-white">Clicky Game</h2>
      </li>
      <li className="nav-item ml-4">
        <h2 className="text-white">{props.gameMessage}</h2>
      </li>
      <li className="nav-item mr-2">
        <h2 className="text-white">
          Score: {props.score} | Top Score: {props.topScore}
        </h2>
      </li>
    </ul>
  );
}

export default Navbar;
