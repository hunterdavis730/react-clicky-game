import React from "react";
import "./index.css";

function Jumbotron() {
  return (
    <div className="jumbotron mt-5">
      <h1 className="text-center text-white pb-3 mr-5">React Clicky Game!</h1>
      <h5 className="text-center text-white mr-5">
        Click on an image to earn points, but don't click on any image more than
        once!
      </h5>
    </div>
  );
}

export default Jumbotron;
