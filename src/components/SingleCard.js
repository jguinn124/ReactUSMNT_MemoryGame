import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
