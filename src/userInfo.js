import React from 'react';
import './App.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render () {
    const { match: { params } } = this.props;

   //console.log(match, 'dkjdkdhjh');
    return (
   
    <div>My name is {params.userId}</div>
     
    );
  }
}

export default UserInfo;
