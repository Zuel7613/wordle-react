import React, { Component } from 'react';
import WordleTile from './wordle-tile';

class WordleRow extends Component {
  constructor(props){
    super(props);
  }
  state = {
  }

  render() {
    let guess = this.props.guess;
    return (
      <div className='row-tile'>
        <WordleTile letter = {guess[0]}/>
        <WordleTile letter = {guess[1]}/>
        <WordleTile letter = {guess[2]}/>
        <WordleTile letter = {guess[3]}/>
        <WordleTile letter = {guess[4]}/>
      </div>
    );
  }

}

export default WordleRow;