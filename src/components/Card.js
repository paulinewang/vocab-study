import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./../styles/card.scss";

const Card = ({ originalWord, translation }) => {
  const cardItem = useRef();

  const flipCard = () => {
    cardItem.current.classList.toggle("is-flipped");
  };

  return (
    <div className="wrapper">
      <div className="card" onClick={flipCard} ref={cardItem}>
        <div className="card__face card__face--front">
          <span className="card__original">️{originalWord}</span>
        </div>
        <div className="card__translation card__face card__face--back">
          {translation}
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  originalWord: PropTypes.string,
  translation: PropTypes.string,
};
