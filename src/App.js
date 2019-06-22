import React from "react";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";

import Card from "./components/Card";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    gameMessage: "Click an image to begin!",
    images: friends,
    guesses: []
  };

  shuffleCards = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  playGame = index => {
    this.shuffleCards(this.state.images);
    if (this.state.guesses.includes(index)) {
      this.setState({
        gameMessage: "You guessed incorrectly!",
        score: 0
      });
    } else {
      const current = this.state.guesses;
      current.push(index);
      console.log(current);
      const score = this.state.score + 1;
      if (score > this.state.topScore) {
        this.setState({
          gameMessage: "You guessed correctly!",
          guesses: current,
          score: score,
          topScore: score
        });
      } else {
        this.setState({
          gameMessage: "You guessed correctly!",
          guesses: current,
          score: score
        });
      }
    }
  };

  render() {
    return (
      <>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          gameMessage={this.state.gameMessage}
        />
        <Jumbotron />
        <Wrapper>
          <Row>
            {this.state.images.map(image => {
              return (
                <Card
                  id={image.id}
                  image={image.image}
                  playGame={this.playGame}
                />
              );
            })}
          </Row>
        </Wrapper>
      </>
    );
  }
}

export default App;
