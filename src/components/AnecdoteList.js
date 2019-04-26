import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, sortByVoted } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
import { setFilter } from '../reducers/filterReducer'
import Filter from './Filter'

const AnecdoteList = (props) => {

  const vote = (id, content) => {
    props.voteAnecdote(id)
    props.sortByVoted()
    props.setFilter(props.visibleAnecdotes)
    notify(content)
  }

  const notify = (content) => {
    props.setMessage(`Voted: "${content}"`)
    setTimeout(() => {
      props.setMessage('')
    }, 5000)
  }

  return (
    <div className='list-group my-md-3'>
      <Filter />
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id} className='row-md-8 list-group-item'>
          <div className='my-md-2'>
            {anecdote.content}
          </div>
          <div className='row mx-md-0'>
            <p>has {anecdote.votes} votes</p>
            <button className='mx-md-2 btn btn-primary'
              onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const compareObjects = (objA, objB) => {
  let objAProps = Object.getOwnPropertyNames(objA)
  let objBProps = Object.getOwnPropertyNames(objB)

  if (objAProps.length !== objBProps.length) {
    return false
  }

  objAProps.forEach(prop => {
    if (objA[prop] !== objB[prop]) {
      return false
    }
  })
  return true
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return compareObjects(anecdotes, filter) ? anecdotes : filter
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