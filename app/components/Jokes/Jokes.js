import React, { Component } from 'react';
import { Link } from 'react-dom';
import './jokes-style';
import Input from '../Input/Input';
import JokeCards from './JokeCards';

export default class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      jokeNum: 0,
      favorites: [],
    }
  }

  getNewJokes(){
    const jokeAPI = `http://api.icndb.com/jokes/random/${this.state.jokeNum}?escape=javascript`
    fetch(jokeAPI)
          .then((response)=>{
              return response.json()})
          .then((data)=> {
      this.setState({ jokes: data.value })
    })
  }

  handleChange(e) {
    this.setState({ jokeNum: e.target.value })
  }

  addFavorite(joke) {
    this.state.favorites.push(joke)
    this.setState({ favorites: this.state.favorites })
  }

  render() {
    return(
      <div>
        <Input handleChange={this.handleChange.bind(this)}
               getNewJokes={this.getNewJokes.bind(this)}
        />
        <JokeCards jokes={this.state.jokes}
                   addFavorite={this.addFavorite.bind(this)}
                   favorites={this.state.favorites}
        />
      </div>

    )
  }
}

Jokes.propTypes = {
  handleChange: React.PropTypes.func,
  getNewJokes: React.PropTypes.func,
  jokes: React.PropTypes.string,
  favorites: React.PropTypes.array
}
