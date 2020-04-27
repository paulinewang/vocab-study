import React from "react";
import "./App.css";

import Main from "./components/Main";
import Modal from "./components/Modal";
import CardCollection from "./components/CardCollection";

import "./styles/main.scss";

class App extends React.Component {
  state = {
    rawInput: "",
    wordCombinations: [],
    submitted: false,
    defaultOrder: true,
  };

  handleChange = (rawData, data) => {
    this.setState({
      rawInput: rawData,
      wordCombinations: data,
    });
  };

  resetCards = () => {
    // TODO: Refactor to not use querySelectorAll
    const flippedCards = document.querySelectorAll(".is-flipped");
    flippedCards.forEach((item) => {
      item.classList.remove("is-flipped");
    });
  };

  shuffleCards = (pairs) => {
    // Flip all cards back to original state
    this.resetCards();
    // Randomize the order
    const shuffledDeck = pairs.sort(() => Math.random() - 0.5);
    this.setState({ wordCombinations: shuffledDeck });
  };

  reverseLanguages = () => {
    this.resetCards();
    this.setState({ defaultOrder: !this.state.defaultOrder });
  };

  changeInput = () => {
    this.setState({ submitted: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.submitted && (
          <Main
            resetCards={this.resetCards}
            shuffleCards={this.shuffleCards}
            wordCombinations={this.state.wordCombinations}
            reverseLanguages={this.reverseLanguages}
            changeInput={this.changeInput}
          />
        )}
        {this.state.submitted ? (
          <CardCollection
            wordCombinations={this.state.wordCombinations}
            defaultOrder={this.state.defaultOrder}
          />
        ) : (
          <Modal
            handleInput={this.handleChange}
            onClickSubmit={() => this.setState({ submitted: true })}
            words={this.state.wordCombinations}
            isSubmitting={this.state.submitted}
          />
        )}
      </div>
    );
  }
}

export default App;
