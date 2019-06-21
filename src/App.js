import React from "react";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    gameMessage: "Click an image to begin!",
    images: friends,
    currentImg: 0
  };

  shuffleCards = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  playGame = index => {
    this.shuffleCards(this.state.images);
    if (index === this.state.currentImg) {
      this.setState({
        currentImg: 0,
        gameMessage: "You guessed incorrectly!",
        score: 0
      });
    } else {
      const current = index;
      const score = this.state.score + 1;
      if (score > this.state.topScore) {
        this.setState({
          gameMessage: "You guessed correctly!",
          currentImg: current,
          score: score,
          topScore: score
        });
      } else {
        this.setState({
          gameMessage: "You guessed correctly!",
          currentImg: current,
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
