import React, { Component } from 'react';
import './NewTrickForm.css';

class NewTrickForm extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault

  }

  render() {
    return (
      <form className='new-trick-form'>
        <select name='stance' value={this.state.stance} onChange={this.handleChange}>
          <option value=''>Select Your Stance</option>
          <option value='switch'>Switch</option>
          <option value='regular'>Regular</option>
        </select>
        <label htmlFor='name'>
          <input type='text' name='name' placeholder='Name of Trick' value={this.state.name} onChange={this.handleChange}/>
        </label>
        <select name='obstacle' value={this.state.obstacle} onChange={this.handleChange}>
          <option value=''>Choose your Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <label htmlFor='link'>
          <input type='text' name='link' placeholder='Link to Tutorial' value={this.state.link} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleSubmit}>Send It!</button>
      </form>
    )
  }
}

export default NewTrickForm;
