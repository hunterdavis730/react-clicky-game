import React from "react";

function Col(props) {
  return (
    <div className="col-sm-8 d-flex justify-content-around">
      {props.children}
    </div>
  );
}

export default Col;
