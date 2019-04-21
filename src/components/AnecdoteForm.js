import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  const store = props.store

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(
      addAnecdote(content)
    )
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Create new</h2>
      <form className='form-group my-md-3' onSubmit={newAnecdote}>
        <div><input className='form-control' name='anecdote' /></div>
        <button className='my-md-2 btn btn-primary'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm