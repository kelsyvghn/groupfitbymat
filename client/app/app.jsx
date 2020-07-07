import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/app.css';
export default class App extends React.Component{

  render(){
    return (
       <div className={style.home}>Hello App!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
