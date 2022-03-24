import React, { Component } from 'react';
import WordleGrid from '../components/wordle-grid';
import Keyboard from '../components/keyboard';
import { words } from '../assets/wordle-words';
import './wordle.css';


class Wordle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [
        {id: 0, guess: ""},
        {id: 1, guess: ""},
        {id: 2, guess: ""},
        {id: 3, guess: ""},
        {id: 4, guess: ""},
        {id: 5, guess: ""}
      ],
      guessCount: 0,
      word: "",
      gameOver: false
    }
    let total = words.length;
    let num = Math.floor(Math.random() * total);
    this.state.word = words[num].word.toLowerCase();
    console.log(this.state.word);
  }

  render() {
    return (
      <div className='container'>
      <h1 className='title'>Wordle</h1>
      <WordleGrid guesses = {this.state.guesses}/>
      <Keyboard addLetter = {this.handleLetter} onDelete = {this.handleDelete} onEnter = {this.handleEnter}/>
    </div>
    );
  }

  handleLetter = letter => {
    const guesses = [...this.state.guesses];
    let row = this.state.guessCount;
    if( guesses[this.state.guessCount].guess.length < 5 && !this.state.gameOver) {
      guesses[this.state.guessCount].guess += letter;
    }
    this.setState({guesses});
  }

  handleDelete = () => {
    const guesses = [...this.state.guesses];
    guesses[this.state.guessCount].guess = guesses[this.state.guessCount].guess.slice(0, -1);
    this.setState({guesses});
  }

  handleEnter = () => {
    const word = this.state.word;
    let guessCount = this.state.guessCount;
    const guess = this.state.guesses.filter(g => g.id === guessCount);
    for(let i = 0; i < 5; i++) {
      if(guess[0].guess[i] === word[i]) {
        this.updateTile("correct", guessCount, i);
        this.updateKey("correct", guess[0].guess[i]);
      } else if (this.letterIsPresent(guess[0].guess[i], i)) {
        this.updateTile("present", guessCount, i);
        this.updateKey("present", guess[0].guess[i]);
      } else if (!this.letterIsPresent(guess[0].guess[i], i) && this.letterIsPresent(guess[0].guess[i], i) != null) {
        this.updateTile("absent", guessCount, i);
        this.updateKey("absent", guess[0].guess[i]);
      }
    }
    guessCount++;
    this.setState({guessCount});

    let gameOver = false;
    for (let i = 0; i < 5; i++) {
      if (guess[0].guess[i] == word[i]) {
        gameOver = true
      } else {
        gameOver = false;
        break;
      }
    }
    this.setState({gameOver});
  }

  letterIsPresent = (letter, index) => {
    const word = this.state.word;
    const row = this.state.guessCount;
    const guess = this.state.guesses.filter(g => g.id === row);
    // check if letter is in the word
    let occuranceInWord = 0;
    for (let i = 0; i < 5; i++) {
      if (word[i] == letter) {
        occuranceInWord++;
      }
    }
    // if there are no occurances then not present
    if (occuranceInWord == 0) {
      return false;
    }

    // check how many occurance of letter in guess
    let occuranceInGuess = 0;
    for (let i = 0; i < 5; i++) {
      if (guess[0].guess[i] == letter) {
        occuranceInGuess++
      }
    }
    // if occurrance in guess is less than word then just return true
    if (occuranceInGuess <= occuranceInWord) {
      return true;
    }

    // how many correct guess of this letter are there
    let correctGuess = 0
    let guessIndexes = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      if (guess[0].guess[i] == word[i] && letter == word[i]) {
        correctGuess++;
        guessIndexes[i] = 1;
      }
    }
    // the correct tiles are already marked then letter is now absent
    if (correctGuess == occuranceInWord) {
      this.updateTile("absent", row, index);
      return null;
    }

    for (let i = 0; i < 5; i++) {
      if (letter == guess[0].guess[i] && correctGuess <= occuranceInWord) {
        if (i == index) {
          return true;
        } else {
          correctGuess++
        }
        if (correctGuess == occuranceInWord) {
          this.updateTile("absent", row, index);
          return null;
        }
      }
    }

    return null;
  }

  selectTile = (row, column) => {
    let tileRows = document.querySelectorAll("div.row-tile");
    let tiles = tileRows[row].querySelectorAll("div.tile");
    return tiles[column];
  }

  updateTile = (classValue, row, column) => {
    this.selectTile(row, column).classList.add(classValue);
  }

  selectKey = letter => {
    let keys = document.querySelectorAll("button.btn-keyboard");
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].textContent?.indexOf(letter) != -1) {
        return keys[i];
      }
    }
    return null;
  }

  updateKey = (classValue, letter) => {
    let key = this.selectKey(letter);
    if (!key?.classList.contains("correct")) {
      if (classValue == "correct" && key?.classList.contains("present")) {
        key?.classList.remove("present");
      }
      key?.classList.add(classValue);
    }
    if (classValue == "absent") {
      this.selectKey(letter)?.classList.add("disabled");
    }
  }
}

export default Wordle;