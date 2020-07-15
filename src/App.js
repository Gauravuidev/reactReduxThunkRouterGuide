import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {increment, decrement, getData, getDataAsyn} from './action/app'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }
  componentDidMount() {
    this.props.getData("Gaurav");
  }

  increment = () => {
    this.props.increment();
    this.props.getData("Ram");
    this.props.getDataAsyn();
  }
  decrement = () => {
    this.props.decrement();
  }
  render () {
    return (
      <div className="App">
        <button className="inc" onClick={this.increment}>+</button>
        <button className="dnc" onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <div>
          {this.props.dataAsync}
        </div>
    <div>My name is {this.props.data}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count : state.counterState.count,
    data: state.dataState.data,
    dataAsync: state.dataState.dataAsync
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch(increment())},
    decrement: () => {dispatch(decrement())},
    getData: (name) => {dispatch(getData(name))},
    getDataAsyn: () => {dispatch(getDataAsyn())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
