import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./../styles/modal.scss";

const Modal = ({
  onClickSubmit,
  handleInput,
  handleRawInput,
  rawInput,
  words,
}) => {
  const wordsTextarea = useRef(null);
  const isSubmitButtonDisabled =
    (wordsTextarea.current && wordsTextarea.current.value === "") ||
    words.length === 0 ||
    words[0].translation === "";
  const buttonClassnames = classNames("modal__button", {
    "modal__button--disabled": isSubmitButtonDisabled,
  });

  const onChange = async () => {
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
    handleRawInput(wordsTextarea.current.value);
  };

  return (
    <div className="modal__container">
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
  handleInput: PropTypes.func,
  handleRawInput: PropTypes.func,
  rawInput: PropTypes.string,
  words: PropTypes.array,
};
