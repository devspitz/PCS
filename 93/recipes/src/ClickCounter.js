import React, { Component } from 'react'

export default class ClickCounter extends Component {
  /*state = {
    count: 0
  };*/

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    //this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  handleClick = () => {
    console.log('clicked');

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log(this);

    return (
      <div>
        This button was clicked <button className="btn btn-secondary" onClick={this.handleClick /*this.handleClick.bind(this)*//*() => this.handleClick()*/}>{this.state.count}</button> times
      </div>
    )
  }
}
