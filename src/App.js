import React from "react";
import "./App.css";

import Modal from "./components/Modal";
import CardCollection from "./components/CardCollection";

import "./styles/main.scss";

class App extends React.Component {
  state = {
    wordCombinations: [],
    submitted: false,
  };

  handleChange = (data) => {
    this.setState({
      wordCombinations: data,
    });
  };

  resetCards = () => {
    const flippedCards = document.querySelectorAll(".is-flipped");
    flippedCards.forEach((item) => {
      item.classList.remove("is-flipped");
    });
  };

  shuffleCards = () => {};

  // eg flip korean and english
  reverseCards = () => {};

  render() {
    return (
      <div className="App">
        <aside className="main__panel">
          <h1 className="main__panel--header">vocab-practice</h1>
          {this.state.submitted && (
            <>
              <button className="main__panel--button" onClick={this.resetCards}>
                Reset
              </button>
              <button className="main__panel--button">Shuffle</button>
            </>
          )}
          <h6 className="main__panel--credit">Made by Pauline</h6>
        </aside>
        {this.state.submitted ? (
          <CardCollection wordCombinations={this.state.wordCombinations} />
        ) : (
          <Modal
            handleInput={this.handleChange}
            onClickSubmit={() => this.setState({ submitted: true })}
            words={this.state.wordCombinations}
          />
        )}
      </div>
    );
  }
}

export default App;
