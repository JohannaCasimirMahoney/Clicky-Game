import React, { Component } from "react";
import DrinkCard from "./components/DrinkCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import drinks from "./drinkcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on a drink to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // Need to set this.state.matches so it matches json array
state = {
  drinks,
  correctGuesses,
  bestScore,
  clickMessage
};

setClicked = id => {
  // copy of the state matches array to work with
  const drinks = this.state.drinks;

  // This will filter the images that are true once clicked
  const clickedDrink = drinks.filter(drink => drink.id === id);

  // True when images are clicked
  if (clickedDrink[0].clicked) {

    console.log ("Correct Guesses: " + correctGuesses);
    console.log ("Best Score: " + bestScore);

    correctGuesses = 0;
    clickMessage = "Oh No! You already clicked on this one."

    for (let i = 0 ; i < drinks.length ; i++){
      drinks[i].clicked = false;
    }

    this.setState({clickMessage});
    this.setState({correctGuesses});
    this.setState({drinks});

  // If clicked = false, and user didn't not finished

  }else if (correctGuesses < 11) {
    // This will set value to true
    clickedDrink[0].clicked = true;
    
    // this will increase the corrent amount
    correctGuesses++;

    clickMessage = "Awesome! You have not click on that drink yet! Don't stop now!";

    if (correctGuesses > bestScore) {
      bestScore = correctGuesses;
      this.setState({ bestScore });
    }

// This will shuffle the array and get the random order
drinks.sort(function(a, b){return 0.5 - Math.random()});

// Set this.state.matches will equal the new matches 
this.setState({ drinks });
this.setState({ correctGuesses });
this.setState({ clickMessage });
  } else {

// set its value to be true
clickedDrink[0].clicked = true;

// this will restart the guess 
correctGuesses = 0;

// encourage to play again
clickMessage = "Fantastic!!! You got them ALL!!! Let's play again!";
bestScore = 12;
this.setState({ bestScore });

for (let i = 0 ; i < drinks.length ; i++) {
  drinks[i].clicked = false;
}
// This will shuffle the array and get the random order
drinks.sort(function(a, b){return 0.5 - Math.random()});

// Set this.state.matches will equal the new matches 
this.setState({ drinks });
this.setState({ correctGuesses });
this.setState({ clickMessage });

  }

};

render() {
  return (
<Wrapper>
  <Title>Drinky Clicky Game</Title>
  <h3 className="scoreSummary">
  {this.state.clickMessage}
  </h3>
  
  
  <h3 className="scoreSummary card-header">
    Correct Guesses: {this.state.correctGuesses} 
    <br /> Best Score: {this.state.bestScore}
    </h3>

<div className="container">
<div className="row">
  {this.state.drinks.map(drink => (
    <DrinkCard

    setClicked={this.setClicked}
    id={drink.id}
    key={drink.id}
    image={drink.image}
/>

))}
</div>  
</div>

</Wrapper>

  );
}

}

export default App;
