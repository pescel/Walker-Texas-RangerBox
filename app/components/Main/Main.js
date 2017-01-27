import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';
import './main-style';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainJoke: '',
      name: '',
      parentControls: ''
    }
  }

  componentDidMount() {
    this.setRandomJoke()
  }

  setRandomJoke() {
    const randomJokeAPI = `http://api.icndb.com/jokes/random/?escape=javascript${this.state.parentControls}`

    fetch(randomJokeAPI).then((response)=>{
      return response.json()
    }).then((data)=> {
      let joke = data.value.joke;
      if (this.state.name) {
        joke = joke.replace(/Chuck Norris/g, this.state.name);
      }
      this.setState({ mainJoke: joke })
    })
  }

  changeName(name) {
    this.setState({ name: name })
    this.setRandomJoke()
  }


  pControlsOn() {
    this.setState({
      parentControls: 'limitTo=[explicit]'
    })
  }

  pControlsOff() {
    this.setState({
      parentControls: ''
    })
  }

  loadFavorites() {
    return this.state.favorites.map((fave, i) => {
      return  (
        <div key={i}>{fave}</div>
        )
      })
    }

  render() {
    return(
      <div>
        <Header location={this.props.location} />
        <p className='main-joke'>{this.state.mainJoke}</p>
        {React.cloneElement(this.props.children, {
          name: this.state.name,
          changeName: this.changeName.bind(this)
        })}
      </div>
    )
  }
}

Main.propTypes = {
  mainJoke: React.PropTypes.string
}
