import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <h2>Create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App