import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/app.css';
import decal from '../../resources/decal.png';
export default class App extends React.Component{

  render(){
    return (
       <div className={styles.home}>
       <div className={styles.pic}>
       <h1>Hello and Welcome!</h1>
          <img src={decal}/>
         </div>
         </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
