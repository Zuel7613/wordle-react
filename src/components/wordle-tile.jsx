import React, { Component } from 'react';

class WordleTile extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (
      <div className='tile'>
          {this.props.letter}
      </div>
    );
  }
}
 
export default WordleTile;