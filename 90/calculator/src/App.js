import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    digitA: 0,
    digitB: 0,
    index: 0,
    total: 0,
    input: 0,
    operator: null
  };

  addValueToTotal(inputNumber) {
    if (this.state.index === 0) {
      const newInput = inputNumber.toString();
      let numberOne = this.state.digitA.toString();
      this.setState({
        digitA: (numberOne + newInput),
        input: (numberOne + newInput)
      });
    } else {
      const newInput = inputNumber.toString();
      let numberTwo = this.state.digitB.toString();

      this.setState({
        digitB: (numberTwo + newInput),
        input: (numberTwo + newInput),
      });
    }
  }

  addOperator = (inputOperator) => {
    this.state.index++;
    this.setState({
      operator: inputOperator,
      input: inputOperator
    });
  }

  calculate = () => {
    const operator = this.state.operator;
    let theTotal;

    if (operator === '+') {
      theTotal = (Number(this.state.digitA) + Number(this.state.digitB))
      console.log(theTotal)
    } else if (operator === '') {
      theTotal = (Number(this.state.digitA) - Number(this.state.digitB));
    } else if (operator === '*') {
      theTotal = (Number(this.state.digitA) * Number(this.state.digitB));
    } else if (operator === '/') {
      theTotal = (Number(this.state.digitA) / Number(this.state.digitB));
    }
    this.setState({
      total: theTotal,
      input: theTotal
    });
  }
  setInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  clear = () => {
    this.setState({
      digitA: 0,
      digitB: 0,
      index: 0,
      total: 0,
      input: 0,
      operator: null
    })
  }

  render() {

    return (
      <>
        <div className="Calc">
          <input className='theInput fullButton' value={this.state.input} onChange={this.setInput} />
        </div>
        <div className="calculator-keys">


          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(7)}>7</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(8)}>8</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(9)}>9</button>

          <button className="operator btn btn-info aButton" value="+" onClick={() => this.addOperator('+')}>+</button>
          <br />
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(4)}>4</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(5)}>5</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(6)}>6</button>

          <button className="operator btn btn-info aButton" value="-" onClick={() => this.addOperator('-')}>-</button>
          <br />
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(1)}>1</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(2)}>2</button>
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(3)}>3</button>
          <button className="operator btn btn-info aButton" value="*" onClick={() => this.addOperator('*')}>&times;</button>
          <br />
          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal(0)}>0</button>

          <button className="btn btn-light waves-effect aButton" onClick={() => this.addValueToTotal('.')}>.</button>

          <button className="btn btn-light waves-effect aButton" onClick={() => this.clear()}>C</button>
          <button className="operator btn btn-info aButton" value="/" onClick={() => this.addOperator('/')}>&divide;</button>
          <br />
          <button type="button" className="equal-sign operator btn btn-dark fullButton" onClick={() => this.calculate()} >=</button>


        </div>
      </>
    );
  }
}

export default App;


