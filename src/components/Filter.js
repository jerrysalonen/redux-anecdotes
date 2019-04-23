import React, { useEffect } from 'react'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

  useEffect(() => {
    props.store.dispatch(
      setFilter(props.store.getState().anecdotes)
    )
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    let filterText = event.target.value
    let filtered = props.store.getState().anecdotes
    filtered = filtered.filter((anecdote) => {
      let content = anecdote.content.toLowerCase()
      return content.indexOf(
        filterText.toLowerCase()) !== -1
    })

    props.store.dispatch(
      setFilter(filtered)
    )
  }

  return (
    <div className='my-md-2'>
      <label htmlFor='filter'>Filter</label>
      <input className='mx-md-2' id='filter' onChange={handleChange} />
    </div>
  )
}

export default Filter