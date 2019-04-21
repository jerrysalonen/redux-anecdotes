import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {
  return (
    <div className='container'>
      <h2 className='display-4'>Anecdotes</h2>
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App
