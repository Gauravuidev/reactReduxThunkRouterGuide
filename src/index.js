import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Topics from './Topics';
import {Provider} from 'react-redux';
//import {store} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer/index'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
//import withSubscription from './Hoc';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/topics">
            <Topics/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
