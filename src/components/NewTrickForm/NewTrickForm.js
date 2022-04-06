import React, { Component } from 'react';
import './NewTrickFrom.css';

class NewTrickFrom extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: ''
    }
  }
  render() {
    return (
      <form className='new-trick-form'>
        <select name='stance'>
          <option value=''>Select Your Stance</option>
          <option value='switch'>Switch</option>
          <option value='regular'>Regular</option>
        </select>
        <label for='name'>
          <input type='text' name='name' placeholder='Name of Trick'>
        </label>
        <select name='obstacle'>
          <option value=''>Choose your Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <label for='link'>
          <input type='text' name='link' placeholder='Link to Tutorial'>
        </label>
      </form>
    )
  }
}


'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'
