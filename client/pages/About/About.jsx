import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{

  render(){
    return (
       <div>Hello About!</div>
    )
  }
}

ReactDOM.render(<About />, document.getElementById('about'));
