import { Component } from 'react';
import Tricks from '../tricks/Tricks';
import NewTrickForm from '../NewTrickForm/NewTrickForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => this.setState({tricks: data}))
      .catch(err => console.log(err))
  }

  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <NewTrickForm addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
