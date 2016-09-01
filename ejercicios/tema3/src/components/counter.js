import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      clicks: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render(){
    const { clicks } = this.state;
    return (
      <button
        className='button'
        onClick={ this.handleClick }>
        <h1>{ clicks }</h1>
      </button>
    )
  }
}

export default Counter;
