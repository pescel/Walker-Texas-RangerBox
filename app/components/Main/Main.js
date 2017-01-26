import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainJoke: '',
      jokes: [],
      jokeNum: 0
    }
  }

  componentDidMount() {
    const randomJokeAPI = 'http://api.icndb.com/jokes/random/?escape=javascript'

    fetch(randomJokeAPI).then((response)=>{
      return response.json()
    }).then((data)=> {
      this.setState({ mainJoke: data.value.joke })
    })
  }

  getNewJokes(){
    const jokeAPI = `http://api.icndb.com/jokes/random/${this.state.jokesNum}/?escape=javascript`
    fetch(jokeAPI)
          .then((response)=>{
              return response.json()})
          .then((data)=> {
            console.log("new joke")
      this.setState({ jokes: data.value })
    })
  }

  handleChange(e) {
    this.setState({ jokeNum: e.target.value })
  }

  render() {
    return(
      <div>
        <Header />
        <p className='main-joke'>{this.state.mainJoke}</p>
        <Input handleChange={this.handleChange.bind(this)}
               getNewJokes={this.getNewJokes.bind(this)}
        />
        {this.props.children}
      </div>
    )
  }
}
