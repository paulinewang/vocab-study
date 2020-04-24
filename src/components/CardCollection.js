import React from "react";

import Card from "./Card";

import "./../styles/collection.scss";

const CardCollection = ({ wordCombinations }) => {
  return (
    <div className="collection">
      {wordCombinations.map((card, index) => (
        <Card
          key={index}
          originalWord={card.word}
          translation={card.translation}
          cardId={index}
        />
      ))}
    </div>
  );
};

export default CardCollection;
