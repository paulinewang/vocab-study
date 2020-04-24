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

  // flip back to show all words
  resetCards = () => {};

  shuffleCards = () => {};

  // eg flip korean and english
  reverseCards = () => {};

  render() {
    return (
      <div className="App">
        <aside>
          <h1 className="main__header">vocab-practice</h1>
          <h6>Made by Pauline</h6>
          {this.state.submitted && (
            <>
              <button onClick={this.resetCards}>Reset</button>
              <button>Shuffle</button>
            </>
          )}
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
