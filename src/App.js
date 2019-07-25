import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./idcard.json";
import "./App.css";

let correctGuess = 0;
let bestScore = 0;
let clickMessage = "Click on a drink to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // Need to set this.state.matches so it matches json array
state = {
  matches,
  correctGuess,
  bestScore,
  clickMessage
};

setClick = id => {
  // copy of the state matches array to work with
  const matches = this.state.matches;

  // This will filter the images that are true once clicked
  const clickMessage = matches.filter(match.id === id);

  // True when images are clicked
  if (clickedMatch[0].clicked) {

    console.log ("Correct Guesses: " + correctGuess);
    console.log ("Best Score: " + bestScore);

    correctGuess = 0;
    clickMessage = "Oh No! You already clicked on this one."

    for (let i = 0 ; i < matches.length ; i++){
      matches[i].clicked = false;
    }

    this.setState({clickMessage});
    this.setState({correctGuess});
    this.setState({matches});

  // If clicked = false, and user didn't not finished

  }else if (correctGuess <11) {
    // This will set value to true
    clickMessage[0].clicked = true;
    
    // this will increase the corrent amount
    correctGuess++;

    clickMessage = "Awesome! You have not click on that drink yet! Don't stop now!";

    if (correctGuess > bestScore) {
      bestScore = correctGuess;
      this.setState({ bestScore });
    }

// This will shuffle the array and get the random order
matches.sort(function(a, b){return 0.5 - Math.random()});

// Set this.state.matches will equal the new matches 
this.setState({ matches });
this.setState({ correctGuess });
this.setState({ clickMessage });
  }else {

// set its value to be true
clickedMatch[0].clicked = true;

// this will restart the guess 
correctGuess = 0;

// encourage to play again
clickMessage = "Fantastic!!! You got them ALL!!! Let's play again!";







  }













}




};











import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
