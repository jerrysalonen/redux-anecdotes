import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { setFilter } from '../reducers/filterReducer'

const AnecdoteForm = (props) => {

  const store = props.store

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(
      addAnecdote(content)
    )

    event.target.anecdote.value = ''

    store.dispatch(
      setFilter(store.getState().anecdotes)
    )

    store.dispatch(
      setMessage(`Added: ${content}`)
    )

    setTimeout(() => {
      store.dispatch(
        setMessage('')
      )
    }, 5000)

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