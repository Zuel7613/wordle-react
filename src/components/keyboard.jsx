import React, { Component } from 'react';
import WordleGrid from './wordle-grid';
import './keyboard.css';

class Keyboard extends Component {
  state = {
  }
  render() {
    return (
      <div className="keyboard">
        <div className='row-keyboard'>
          <div className="btn-group">
            <button onClick={() => this.props.addLetter("q")} type="button" className='btn btn-outline-dark btn-keyboard'>q</button>
            <button onClick={() => this.props.addLetter("w")} type="button" className='btn btn-outline-dark btn-keyboard'>w</button>
            <button onClick={() => this.props.addLetter("e")} type="button" className='btn btn-outline-dark btn-keyboard'>e</button>
            <button onClick={() => this.props.addLetter("r")} type="button" className='btn btn-outline-dark btn-keyboard'>r</button>
            <button onClick={() => this.props.addLetter("t")} type="button" className='btn btn-outline-dark btn-keyboard'>t</button>
            <button onClick={() => this.props.addLetter("y")} type="button" className='btn btn-outline-dark btn-keyboard'>y</button>
            <button onClick={() => this.props.addLetter("u")} type="button" className='btn btn-outline-dark btn-keyboard'>u</button>
            <button onClick={() => this.props.addLetter("i")} type="button" className='btn btn-outline-dark btn-keyboard'>i</button>
            <button onClick={() => this.props.addLetter("o")} type="button" className='btn btn-outline-dark btn-keyboard'>o</button>
            <button onClick={() => this.props.addLetter("p")} type="button" className='btn btn-outline-dark btn-keyboard'>p</button>
          </div>
        </div>
        <div className='row-keyboard'>
          <div className="btn-group row-keyboard">
            <button onClick={() => this.props.addLetter("a")} type="button" className='btn btn-outline-dark btn-keyboard'>a</button>
            <button onClick={() => this.props.addLetter("s")} type="button" className='btn btn-outline-dark btn-keyboard'>s</button>
            <button onClick={() => this.props.addLetter("d")} type="button" className='btn btn-outline-dark btn-keyboard'>d</button>
            <button onClick={() => this.props.addLetter("f")} type="button" className='btn btn-outline-dark btn-keyboard'>f</button>
            <button onClick={() => this.props.addLetter("g")} type="button" className='btn btn-outline-dark btn-keyboard'>g</button>
            <button onClick={() => this.props.addLetter("h")} type="button" className='btn btn-outline-dark btn-keyboard'>h</button>
            <button onClick={() => this.props.addLetter("j")} type="button" className='btn btn-outline-dark btn-keyboard'>j</button>
            <button onClick={() => this.props.addLetter("k")} type="button" className='btn btn-outline-dark btn-keyboard'>k</button>
            <button onClick={() => this.props.addLetter("l")} type="button" className='btn btn-outline-dark btn-keyboard'>l</button>
          </div>
        </div>
        <div className='row-keyboard'>
          <div className="btn-group row-keyboard">
            <button onClick={this.props.onDelete} type="button" className='btn btn-outline-dark btn-keyboard-lg'>delete</button>
            <button onClick={() => this.props.addLetter("z")} type="button" className='btn btn-outline-dark btn-keyboard'>z</button>
            <button onClick={() => this.props.addLetter("x")} type="button" className='btn btn-outline-dark btn-keyboard'>x</button>
            <button onClick={() => this.props.addLetter("c")} type="button" className='btn btn-outline-dark btn-keyboard'>c</button>
            <button onClick={() => this.props.addLetter("v")} type="button" className='btn btn-outline-dark btn-keyboard'>v</button>
            <button onClick={() => this.props.addLetter("b")} type="button" className='btn btn-outline-dark btn-keyboard'>b</button>
            <button onClick={() => this.props.addLetter("n")} type="button" className='btn btn-outline-dark btn-keyboard'>n</button>
            <button onClick={() => this.props.addLetter("m")} type="button" className='btn btn-outline-dark btn-keyboard'>m</button>
            <button onClick={this.props.onEnter} type="button" className='btn btn-outline-dark btn-keyboard-lg'>enter</button>
          </div>
        </div>
      </div>
    );
  }

  addLetter(letter) {
    if(letter)
    return letter;
  }
}
 
export default Keyboard;