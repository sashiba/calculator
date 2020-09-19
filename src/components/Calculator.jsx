import React, { Component } from "react";

class Calculator extends Component {
  state = {
    result: "",
  };

  handleClick = (event) => {
    const { name } = event.target;
    const { result } = this.state;

    if (name === "=") {
      this.calculate();
    } else if (name === "C") {
      this.clear();
    } else if (name === "CE" && result.length > 0) {
      this.setState({ result: result.slice(0, -1) });
    } else {
      this.setState({ result: result + name });
    }
  };

  calculate = () => {
    const { result } = this.state;
    const calculated = eval(result);
    console.log("calculate: ", calculated);

    this.setState({ result: calculated });
  };

  clear = () => {
    this.setState({
      result: "",
    });
  };

  renderButton(name) {
    return (
      <button
        key={name}
        name={name}
        className="button"
        onClick={(e) => this.handleClick(e)}
      >
        {name}
      </button>
    );
  }

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
        <div className="flex-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => this.renderButton(el))}
        </div>
        <div className="flex-container">
          {["+", "-", "*", "/", "=", "CE", "C"].map((el) =>
            this.renderButton(el)
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;
