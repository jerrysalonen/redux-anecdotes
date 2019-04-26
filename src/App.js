import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initAnecdotes, sortByVoted } from './reducers/anecdoteReducer'
import { setFilter } from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'
import 'bootstrap/dist/css/bootstrap.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {

  useEffect(() => {
    props.initAnecdotes()
    anecdoteService.getAll().then(anecdotes => {
      props.setFilter(anecdotes)
      props.sortByVoted()
    })
  }, [])

  return (
    <div className='container'>
      <Notification />
      <h2 className='display-4'>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initAnecdotes, setFilter, sortByVoted })(App)