import React, { useState, useEffect } from 'react'
import './App.scss'
import Character from './components/Character'

const App = () => {

  const [state, setState] = useState({
    starwarsChars: [],
    enter: false,
    npUrl: '',
    render: false
  })

  useEffect(() => {

    getCharacters(state.npUrl === '' ? 'https://swapi.co/api/people/' : state.npUrl)

  }, [state.render])

  function getCharacters(URL) {

    fetch(URL)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        setState({
          ...state,
          starwarsChars: data.results,
          npUrl: data.next === '' ? '' : data.next,
          render: false
        })
      })
      .catch(err => {
        throw new Error(err)
      })

  }

  const enter = () => {
    setState({ ...state, enter: !state.enter })
  }

  const triggerNextPage = e => {
    e.preventDefault()
    setState({ ...state, render: true })
  }

  return (
    <div className="App">
      <div
        className={`Header${state.enter === true ? '' : ' big'}`}
        onClick={enter}
      >
        <h1>React Wars</h1></div>
      {state.enter === false ? null : state.starwarsChars.map((char, i) => <Character key={i} char={char} />)}
      {state.enter === false ? null : <button onClick={triggerNextPage}>Next Page</button>}
    </div>
  )

}

export default App
