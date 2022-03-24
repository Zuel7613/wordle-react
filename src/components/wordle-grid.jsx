import React, { Component } from 'react';
import WordleRow from './wordle-row';
import './wordle-grid.css';

class WordleGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='gameboard'>
        {this.props.guesses.map(guess => <WordleRow guess = {guess.guess} key = {guess.id} />)}
      </div>
    );
  }

  handleGuess(newGuess) {
    this.setState({
      guess: newGuess
    });
  }
}

export default WordleGrid;