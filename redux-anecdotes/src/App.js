import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>Create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App