import React, { Component } from 'react';
import './App.scss';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      enter: false,
      npUrl: ''
    };
  }

  componentDidMount(url) {
    this.getCharacters(this.state.npUrl === '' ? 'https://swapi.co/api/people/' : url);
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
        console.log(data.next)
        this.setState({
          starwarsChars: data.results,
          npUrl: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  enter = () => {
    this.setState({ enter: !this.state.enter })
  }

  triggerNextPage = e => {
    e.preventDefault();
    this.componentDidMount(this.state.npUrl)
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
        {this.state.enter === false ? null : <button onClick={this.triggerNextPage}>Next Page</button>}
      </div>
    );
  }
}

export default App;
