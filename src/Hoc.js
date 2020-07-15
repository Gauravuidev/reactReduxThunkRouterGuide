import React from 'react';
import {
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
// This function takes a component...
export default function withSubscription(WrappedComponent) {
    let { path, url } = useRouteMatch();
   // ...and returns another component...
    // return class extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
  
    //   render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent path={path} url={url} />;
    //   }
    // };
  }