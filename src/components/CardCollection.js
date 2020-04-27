import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import "./../styles/collection.scss";

const CardCollection = ({ wordCombinations, defaultOrder }) => {
  return (
    <div className="collection">
      {wordCombinations.map((card, index) => (
        <Card
          key={index}
          originalWord={defaultOrder ? card.word : card.translation}
          translation={defaultOrder ? card.translation : card.word}
          cardId={index}
        />
      ))}
    </div>
  );
};

export default CardCollection;

CardCollection.propTypes = {
  wordCombinations: PropTypes.array,
  defaultOrder: PropTypes.bool,
};
