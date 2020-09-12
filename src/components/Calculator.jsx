import React, { Component } from "react";

class Calculator extends Component {
  state = {
    result: "",
    operation: "",
    x: "",
    y: "",
  };

  // op=="" -> clicks += x;
  // op=="+,-,*,/" -> clicks +=y
  // op =="=" -> x(op)y = result

  handleClick = (event) => {
    const { textContent } = event.target;
    const { result } = this.state;

    this.setState({ result: result + textContent });
  };

  handleClickOperator = (event) => {
    const { textContent } = event.target;
    // + - * / = Clear
    console.log(textContent);
    this.setState({ operation: textContent });
    // if = => calculate()
    // if Clear -> clear()
  };

  calculate = () => {};

  clear = () => {
    this.setState({
      result: "0",
      operation: "",
      x: "",
      y: "",
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Calculator</h1>
        </header>
        <div>
          <input
            className="inputBox"
            value={this.state.result}
            readOnly
            name="result"
          />
        </div>
        <div>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            7
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            8
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            9
          </button>
        </div>
        <div>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            4
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            5
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            6
          </button>
        </div>
        <div>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            3
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            2
          </button>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            1
          </button>
        </div>
        <div>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            0
          </button>
        </div>
        <div>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            +
          </button>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            -
          </button>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            *
          </button>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            /
          </button>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            =
          </button>
          <button
            className="button"
            onClick={(e) => this.handleClickOperator(e)}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
