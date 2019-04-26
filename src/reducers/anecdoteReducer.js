import _ from 'lodash'
import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (id) => {
  return async dispatch => {
    anecdoteService.vote(id)
    dispatch({
      type: 'VOTE',
      data: id
    })
  }
}

export const addAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const sortByVoted = () => {
  return {
    type: 'SORT'
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    case 'NEW_ANECDOTE':
      let stateCpy = _.cloneDeep(state)
      return [...stateCpy, action.data]
    case 'SORT':
      return state.slice().sort((a, b) => a.votes < b.votes ? 1 : -1)
    case 'INIT':
      const init = _.cloneDeep(action.data)
      return init
    default:
      return state
  }
}

export default anecdoteReducer