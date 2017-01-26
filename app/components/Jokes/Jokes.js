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
      jokeNum: 0
    }
  }

  getNewJokes(){
    console.log('jokesNum', this.state.jokeNum);
    const jokeAPI = `http://api.icndb.com/jokes/random/${this.state.jokeNum}?escape=javascript`
    console.log('url', jokeAPI);
    fetch(jokeAPI)
          .then((response)=>{
              return response.json()})
          .then((data)=> {
            console.log("new joke", data)
      this.setState({ jokes: data.value })
    })
  }

  handleChange(e) {
    this.setState({ jokeNum: e.target.value })
  }

  render() {
    return(
      <div>
        <Input handleChange={this.handleChange.bind(this)}
               getNewJokes={this.getNewJokes.bind(this)}
        />
        <JokeCards jokes={this.state.jokes} />
      </div>

    )
  }
}
