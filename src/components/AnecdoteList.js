import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, sortByVoted } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { setFilter } from '../reducers/filterReducer'
import Filter from './Filter'

const AnecdoteList = (props) => {

  const anecdotes = props.visibleAnecdotes

  const vote = (id, content) => {
    props.voteAnecdote(id)
    props.setFilter(props.visibleAnecdotes)
    props.setMessage(`Voted: ${content}`)
    props.sortByVoted()
    
    setTimeout(() => {
      props.setMessage('')
    }, 5000)
  }
  return (
    <div className='list-group my-md-3'>
    <Filter />
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes === filter ? anecdotes : filter
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  sortByVoted,
  setMessage,
  setFilter
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList