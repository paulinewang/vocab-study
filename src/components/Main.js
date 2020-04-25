import React from "react";

const Main = ({
  resetCards,
  shuffleCards,
  wordCombinations,
  reverseLanguages,
  changeInput,
}) => (
  <aside className="main">
    <h1 className="main__header">vocab-practice</h1>
    <div className="main__buttons">
      <button className="main__buttons--button" onClick={resetCards}>
        Reset
      </button>
      <button
        className="main__buttons--button"
        onClick={() => shuffleCards(wordCombinations)}
      >
        Shuffle
      </button>
      <button className="main__buttons--button" onClick={reverseLanguages}>
        Reverse languages
      </button>
      <button className="main__buttons--button" onClick={changeInput}>
        Edit words
      </button>
    </div>
    <h6 className="main__credit">Made by Pauline</h6>
  </aside>
);

export default Main;
