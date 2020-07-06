import React from 'react';
import ReactDOM from 'react-dom';

export default class RecentWorkouts extends React.Component{

  render(){
    return (
       <div>Hello Recent Workouts!</div>
    )
  }
}

ReactDOM.render(<RecentWorkouts />, document.getElementById('recent'));
