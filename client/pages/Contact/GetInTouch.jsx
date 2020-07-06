import React from 'react';
import ReactDOM from 'react-dom';

export default class GetInTouch extends React.Component{

  render(){
    return (
       <div>Hello Contact!</div>
    )
  }
}

ReactDOM.render(<GetInTouch />, document.getElementById('contact'));
