import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { setFilter } from '../reducers/filterReducer'

const AnecdoteForm = (props) => {

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value

    props.addAnecdote(content)
    
    event.target.anecdote.value = ''
    
    props.setFilter(props.anecdotes)
    props.setMessage(`Added: "${content}"`)
    setTimeout(() => {
      props.setMessage('')
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