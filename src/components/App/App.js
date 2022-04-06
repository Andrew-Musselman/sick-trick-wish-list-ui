import { Component } from 'react';
import Tricks from '../tricks/Tricks'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ticks: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks ticks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
