import React, { Component } from 'react';
import './App.scss';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      enter: false
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  enter = () => {
    this.setState({ enter: !this.state.enter })
  }

  render() {
    return (
      <div className="App">
        <div
          className={`Header${this.state.enter === true ? '' : ' big'}`}
          onClick={this.enter}
        >
          <h1>React Wars</h1></div>
        {this.state.enter === false ? null : this.state.starwarsChars.map((char, i) => <Character key={i} char={char} />)}
      </div >
    );
  }
}

export default App;
