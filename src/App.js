import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      decrementError: false
    }
  }

  handleDecrement() {
    const { counter } = this.state;
    if(counter > 0) {
      this.setState({counter: counter - 1});
    } else {
      this.setState({decrementError: true});
    }
  }

  handleIncrement() {
    const { counter } = this.state;
    this.setState({counter: counter + 1, decrementError: false});
  }

  render() {
    const { counter, decrementError } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {counter}</h1>
        <div className="buttons-container">
          <button
            data-test="decrement-button"
            onClick={() => this.handleDecrement()}
            >
              Decrement counter
          </button>
          <button
            data-test="increment-button"
            onClick={() => this.handleIncrement()}
            >
              Increment counter
          </button>
        </div>
        {decrementError &&
          <h3 data-test="error-display">The counter can't go below zero</h3>
        }
      </div>
    );
  }
}

export default App;
