import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    let filterText = event.target.value
    let filtered = props.anecdotes
    filtered = filtered.filter(anecdote => {
      let content = anecdote.content.toLowerCase()
      return content.indexOf(
        filterText.toLowerCase()) !== -1
    })
    props.setFilter(filtered)
  }

  return (
    <div className='my-md-2'>
      <label htmlFor='filter'>Filter</label>
      <input className='mx-md-2' id='filter' onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  setFilter
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter