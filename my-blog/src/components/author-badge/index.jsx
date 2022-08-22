import React from "react";
import eymaels from "../../assets/img/eyeymaels.png";
import "./styles.css";

export default function AuthorBadge() {
  return (
    <div className="author-container">
      <img className="author-img" src={eymaels} alt="Um democrata cristão" />
      <div>
        <h3>Eymael, José Maria</h3>
        <p>Um democrata cristão</p>
      </div>
    </div>
  );
}
