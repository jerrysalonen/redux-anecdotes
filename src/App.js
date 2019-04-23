import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div className='container'>
      <Notification />
      <h2 className='display-4'>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
