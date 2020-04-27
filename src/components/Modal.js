import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// import LanguagesInput from "./LanguagesInput";

import "./../styles/modal.scss";

const Modal = ({ onClickSubmit, handleInput, words, isSubmitted }) => {
  const wordsTextarea = useRef(null);
  const [rawInput, setRawInput] = useState("");

  const isSubmitButtonDisabled =
    isSubmitted && (words.length === 0 || words[0].translation === "");
  const buttonClassnames = classNames("modal__button", {
    "modal__button--disabled": isSubmitButtonDisabled,
  });

  const onChange = async () => {
    // Split every line into an array element
    await setRawInput(wordsTextarea.current.value);
    const arrayOfWords = wordsTextarea.current.value
      .replace(/\r\n/g, "\n")
      .split("\n");
    // Create object out of every array element
    const wordsArray = [];
    arrayOfWords.forEach((combination) => {
      let translationObject;
      // Split based on the dash into an array
      if (combination.includes("-")) {
        const array = combination.split("-");
        translationObject = {
          word: array[0].trim(),
          translation: array[1].trim(),
        };
        wordsArray.push(translationObject);
        handleInput(rawInput, wordsArray);
      }
    });
  };

  return (
    <div className="modal__container">
      {/* <LanguagesInput /> */}
      {/* set isStarting to false when the user clicks the button*/}
      <aside className="modal__welcome">
        <h1>Amgi암기.</h1>
      </aside>
      <div className="modal__body">
        <textarea
          onChange={onChange}
          placeholder="Insert the words you want to learn here, separated with a dash"
          ref={wordsTextarea}
          className="modal__input"
          value={rawInput}
        />
        {/* {words}</textarea> */}
        {/* When clicking the submit button, the modal goes away and the cards appear */}
        <button
          className={buttonClassnames}
          onClick={onClickSubmit}
          disabled={isSubmitButtonDisabled}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClickSubmit: PropTypes.func,
};
