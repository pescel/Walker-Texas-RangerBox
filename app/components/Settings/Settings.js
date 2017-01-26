import { Component } from 'react';
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
        <div className='set-name'>
          <p>Set Name: </p>
          <input id='name-input'
                 value={this.state.name}
                 handleChange={(e) => {this.setState({ name: e.target.value })}}
          />
          <button className='set-name-button'>SET </button>
          <button className='reset-name-button'>RESET </button>
        </div>
        <div className='parental-control-container'>
          <p>Parental Control: </p>
          <p>On: </p>
          <input type='radio' name='control' value='on'/>
          <p>Off: </p>
          <input type='radio' name='control' value='off'/>
        </div>
      </div>
    )
  }
}
