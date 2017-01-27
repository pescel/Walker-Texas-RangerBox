import React, { Component } from 'react';
import { Link } from 'react-dom';
import './settings-style';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <div className='settings-container'>
        <div className='name-input-container'>
          <p className='set-name'>Set Name: </p>
          <input id='name-input'
                 value={this.state.name}
                 handleChange={(e) => {this.setState({ name: e.target.value })}}
          />
          <button className='set-name-button'>SET </button>
          <button className='reset-name-button'>RESET </button>
        </div>
        <div className='parental-control-container'>
          <p className='parent-controls'>Parental Control: </p>
          <p className='on'>On: </p>
          <input className='on-radio'
                type='radio'
                name='control'
                value='on'/>
          <p className='off'>Off: </p>
          <input className='off-radio'
                 type='radio'
                 name='control'
                 value='off'/>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  name:  React.PropTypes.string

}
