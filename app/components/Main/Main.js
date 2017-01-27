import React, { Component } from 'react';
import Header from '../Header/Header';
import './main-style';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainJoke: ''
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

  render() {
    return(
      <div>
        <Header />
        <p className='main-joke'>{this.state.mainJoke}</p>
        {this.props.children}
      </div>
    )
  }
}
