import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// import LanguagesInput from "./LanguagesInput";

import "./../styles/modal.scss";

const Modal = ({ onClickSubmit, handleInput, words }) => {
  const wordsTextarea = useRef(null);

  const isSubmitButtonDisabled =
    words.length === 0 || words[0].translation === "";
  const buttonClassnames = classNames("modal__button", {
    "modal__button--disabled": isSubmitButtonDisabled,
  });

  const onChange = () => {
    // Split every line into an array element
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
        handleInput(wordsArray);
      }
    });
  };

  return (
    <div className="modal__container">
      {/* <LanguagesInput /> */}
      {/* set isStarting to false when the user clicks the button*/}
      <textarea
        onChange={onChange}
        placeholder="Insert the words you want to learn here, separated with a dash"
        ref={wordsTextarea}
        className="modal__input"
      />
      {/* When clicking the submit button, the modal goes away and the cards appear */}
      <button
        className={buttonClassnames}
        onClick={onClickSubmit}
        disabled={isSubmitButtonDisabled}
      >
        Submit
      </button>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClickSubmit: PropTypes.func,
};
