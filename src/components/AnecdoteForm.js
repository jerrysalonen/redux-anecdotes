import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { setFilter } from '../reducers/filterReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const newAnecdote = async (event) => {
    event.persist()
    event.preventDefault()
    const content = event.target.anecdote.value

    props.addAnecdote(content).then(() => 
      anecdoteService.getAll().then(anecdotes => props.setFilter(anecdotes))
    )
    
    event.target.anecdote.value = ''

    props.setMessage(`Added: "${content}"`, 5)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  setMessage,
  setFilter,
  addAnecdote
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm