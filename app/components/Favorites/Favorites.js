import React, { Component } from 'react';
import Jokes from '../Jokes/Jokes'
import JokeCards from '../Jokes/JokeCards';


export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
        if(this.props.favorites > 0) {
          return <div>{props.loadFavorites}</div>
        } else {
          return <p>NO FAVORITES!</p>;
        }
  }
}
