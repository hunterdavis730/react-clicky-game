import React from "react";

function Row(props) {
  return (
    <div className="row d-flex justify-content-center">{props.children}</div>
  );
}

export default Row;
