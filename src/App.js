import React, { Component } from 'react';
import Hangman from './components/hangman-figure';
import Answer from './components/Answer';
import Output from './components/Output';
import Letters from './components/Letters';
import Next from './components/Next';
import words from './components/words';

class App extends Component {
  constructor(props) {
    super(props);
    let answerList = words;
    // Shuffle the array
    answerList.sort(function() { return 0.5 - Math.random() });
    const answer = answerList.pop().toUpperCase();

    this.state = {
      picked: [" "],
      incorrectPicks: 0,
      answerList: answerList,
      answer: answer,
      gameStatus: 0, // 0 - play, 1 - won,  2 - lost
    };

    this.addAlphas = this.addAlphas.bind(this);
    this.nextWord = this.nextWord.bind(this);
  }

  addAlphas(alpha) {
    let alphaList = this.state.picked;
    alphaList.push(alpha);
    this.setState({picked: alphaList}, () => {
      let word = this.state.answer.replace(new RegExp('[^' + this.state.picked + ']','g'), '-');
      if(word.indexOf('-') === -1) {
        this.setState({gameStatus: 1})
      }
    });

    // Adding if statement and the regex as the else part in the above callback
    // will make the process slow. In the current setup we add regex for every
    // alphabet added increasing the number of cases. Find optimal way.

    if(this.state.answer.indexOf(alpha) === -1) {
      this.setState({incorrectPicks: (this.state.incorrectPicks + 1)}, () => {
        if(this.state.incorrectPicks === 6) {
          this.setState({gameStatus: 2})
        }
      });
    }
  }

  nextWord() {
    const answer = this.state.answerList.pop().toUpperCase();
    this.setState({
      picked: [" "],
      incorrectPicks: 0,
      answer: answer,
      gameStatus: 0,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='title'>Hangman Game</div>
        <Output
          gameStatus = {this.state.gameStatus}
          answer = {this.state.answer}
        />
        <Hangman
          incorrectPicks = {this.state.incorrectPicks}
        />
        <Answer
          answer = {this.state.answer}
          pickedArray = {this.state.picked}
        />
        <div className='info'>A word from KGP lingo</div>
        <Letters
          pickedArray = {this.state.picked}
          gameStatus = {this.state.gameStatus}
          addAlphas = {this.addAlphas}
        />
        <Next
          gameStatus = {this.state.gameStatus}
          answerList = {this.state.answerList}
          nextWord = {this.nextWord}
        />
      </div>
      );
    }
  }

export default App;
