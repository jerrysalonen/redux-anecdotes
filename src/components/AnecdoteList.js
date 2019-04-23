import React from 'react'
import { voteAnecdote, sortByVoted } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const store = props.store
  const anecdotes = store.getState().anecdotes === store.getState().filter ? store.getState().anecdotes : store.getState().filter

  const vote = (id, content) => {
    store.dispatch(
      voteAnecdote(id)
    )

    store.dispatch(
      setMessage(`Voted: ${content}`)
    )

    sort()

    setTimeout(() => {
      store.dispatch(
        setMessage('')
      )
    }, 5000)
  }

  const sort = () => {
    store.dispatch(
      sortByVoted()
    )
  }

  return (
    <div className='list-group my-md-3'>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id} className='row-md-8 list-group-item'>
            <div className='my-md-2'>
              {anecdote.content}
            </div>
            <div className='row mx-md-0'>
              <p>has {anecdote.votes} votes</p>
              <button className='mx-md-2 btn btn-primary' onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )}
      </div>
  )
}

export default AnecdoteList