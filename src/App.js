import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  return (
    <div className='container'>
      { props.store.getState().notification !== '' ? <Notification store={props.store} /> : <span></span>}
      <h2 className='display-4'>Anecdotes</h2>
      <Filter store={props.store} />
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App
