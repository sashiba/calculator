import React, { Component } from "react";

class Calculator extends Component {
  state = {
    result: "",
  };

  handleClick = (event) => {
    const { name } = event.target;
    const { result } = this.state;

    this.setState({ result: result + name });
    // + - * / = Clear
    // if = => calculate()
    // if C -> clear()
    // CE -> backspace
  };

  calculate = () => {
    eval(this.state.result);
  };

  clear = () => {
    this.setState({
      result: "",
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
            placeholder="0"
          />
        </div>
        <div>
          <button
            name="7"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            7
          </button>
          <button
            name="8"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            8
          </button>
          <button
            name="9"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            9
          </button>
        </div>
        <div>
          <button
            name="4"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            4
          </button>
          <button
            name="5"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            5
          </button>
          <button
            name="6"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            6
          </button>
        </div>
        <div>
          <button
            name="3"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            3
          </button>
          <button
            name="4"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            2
          </button>
          <button
            name="1"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            1
          </button>
        </div>
        <div>
          <button
            name="0"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            0
          </button>
        </div>
        <div>
          <button
            name="+"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            +
          </button>
          <button
            name="-"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            -
          </button>
          <button
            name="*"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            *
          </button>
          <button
            name="/"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            /
          </button>
          <button
            name="="
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            =
          </button>
          <button
            name="CE"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            CE
          </button>
          <button
            name="C"
            className="button"
            onClick={(e) => this.handleClick(e)}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
