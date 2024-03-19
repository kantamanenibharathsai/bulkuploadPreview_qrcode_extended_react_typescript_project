import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor method');
  }

  componentDidMount() {
    console.log('Component Did Mount method');
  }

  componentDidUpdate(prevProps: {}, prevState: CounterState, snapshot: any) {
    console.log('Component Did Update method');
    console.log('Previous State:', prevState);
    console.log('Snapshot:', snapshot);
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  shouldComponentUpdate(nextProps: {}, nextState: CounterState) {
    console.log('Should Component Update');
    return nextState.count % 2 === 0;
  }

  static getDerivedStateFromProps(nextProps: {}, prevState: CounterState) {
    console.log('Get Derived State From Props');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: CounterState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('Component Did Catch');
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
