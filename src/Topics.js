import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {increment, decrement, getData, getDataAsyn} from './action/app'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import UserInfo from './userInfo';
class Topics extends React.Component {
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
    //   for dynamic routing https://meanstackdeveloper.in/creating-dynamic-routes-and-components-using-reactjs.html#:~:text=css'%3B%20import%20%7B%20BrowserRouter%20as,%22App%22%3E
    
    return (
      <div className="App">
        <h2>Topics</h2>
        <ul>
           <li>
             <Link to="/topics/data1">Rendering with React</Link>
           </li>
           <li>
             <Link to="/topics/data2">Components</Link>
           </li>
           <li>
             <Link to="/topics/data3">Props v. State</Link>
           </li>
         </ul>
  
         <Route path="/topics/:userId" component={UserInfo}/>
        <button className="inc" onClick={this.increment}>+</button>
        <button className="dnc" onClick={this.decrement}>-</button>
        <span>Topics page</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Topics);


// export default function Topics() {
//     // The `path` lets us build <Route> paths that are
//     // relative to the parent route, while the `url` lets
//     // us build relative links.
//     let { path, url } = useRouteMatch();
  
//     return (
//       <div>
//         <h2>Topics</h2>
//         <ul>
//           <li>
//             <Link to={`${url}/rendering`}>Rendering with React</Link>
//           </li>
//           <li>
//             <Link to={`${url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${url}/props-v-state`}>Props v. State</Link>
//           </li>
//         </ul>
  
//         <Switch>
//           <Route exact path={path}>
//             <h3>Please select a topic.</h3>
//           </Route>
//           <Route path={`${path}/:topicId`}>
//            <div>{`${path}`}</div>
//           </Route>
//         </Switch>
//       </div>
//     );
//   }