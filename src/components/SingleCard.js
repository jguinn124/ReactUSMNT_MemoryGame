import React from "react";
//import "./SingleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div>
      <div className="card-grid">
        <div className="card" key={card.id}>
          <img className="front" src={card.src} alt="front" />
          <img className="back" src="/img/cover.png" alt="back" />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
