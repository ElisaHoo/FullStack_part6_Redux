import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getAnecdotes, castVote } from './request'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {

  const queryClient = useQueryClient()
  
  const voteAnecdoteMutation = useMutation(castVote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const dispatch = useNotificationDispatch()

  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({ type: "SHOW", payload: `You voted '${anecdote.content}'` })
    setTimeout(() => dispatch({ type: "HIDE"}), 5000)
  }

  const result = useQuery('anecdotes', getAnecdotes, { retry: 1 })

  if ( result.isLoading ) {
    return <div>Loading data...</div>
  }

  if ( result.error ) {
    return <div>Anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
  
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
