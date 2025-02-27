import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.onIncrementCounter()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.onDecrementCounter()}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter()}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter()}
        />

        <hr />
        <button onClick={() => this.props.onStoreResult()}>Store Result</button>
        <ul>
          {this.props.results.map((result, idx) => {
            return (
              <li onClick={() => this.props.onDeleteResult(idx)} key={idx}>
                {result}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE" }),
    onDeleteResult: (idx) => dispatch({ type: "DELETE", value: idx }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
