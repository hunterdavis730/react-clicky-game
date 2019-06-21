import React from "react";
import "./index.css";

function Card(props) {
  return (
    <div
      className="card shadow"
      key={props.id}
      onClick={() => props.playGame(props.id)}
    >
      <img src={props.image} className="card-image" alt="" />
    </div>
  );
}

export default Card;
