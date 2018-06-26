import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import GameStatusBar from "./components/GameStatusBar";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Col from "./components/Col";
import cards from "./cards.json";
// import "./App.css";

class App extends Component {
  state = {
    cards,
    message: "Click an image to begin!",
    currentScore: 0,
    topScore: 0,
    clickedCards: []
  };

  handleClick = id => {
    const clicked = this.state.clickedCards.slice();

    this.state.cards.forEach(card => {
      if (id === card.id){
        if (clicked.indexOf(card.id) !== -1){
          this.setState({
            message: "You guessed incorrectly!",
            currentScore: 0,
            clickedCards: []
          });
          return;
        } else {
          clicked.push(card.id);

          this.setState(prevState => {
            let newTopScore;
            if (this.isTopScore()){
              newTopScore = prevState.topScore + 1;
            } else {
              newTopScore = prevState.topScore;
            }

            return {
              message: "You guessed correctly!",
              currentScore: prevState.currentScore + 1,
              clickedCards: clicked,
              topScore: newTopScore
            }
          });
        }
      }
    })
  };

  isTopScore = () => {
    const top = this.state.topScore;
    if (this.state.currentScore + 1 > top && top <= this.state.cards.length){
      return true;
    }
    return false;
  }

  refresh = () => {
    const cards = this.state.cards.map(card => {
      if (card.clicked){
        card.clicked = false
      }
    });

    this.setState({ 
      cards,
      message: "Click an image to begin!"
    });
  }

  render() {
    const cardComponents = this.state.cards.map(card => (
      <Card
        handleClick={this.handleClick}
        id={card.id}
        key={card.id}
        name={card.name}
        image={card.image}
      />
    ));

    cardComponents.sort((a, b) => 0.5 - Math.random());
    const row1 = cardComponents.slice(0, 4);
    const row2 = cardComponents.slice(4, 8);
    const row3 = cardComponents.slice(8);

    return (
      <div>
        <GameStatusBar 
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          <Row cards={row1}/>
          <Row cards={row2}/>
          <Row cards={row3}/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
