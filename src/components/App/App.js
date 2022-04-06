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

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <NewTrickForm />
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
