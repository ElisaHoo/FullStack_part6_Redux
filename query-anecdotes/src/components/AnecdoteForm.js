import { createAnecdote } from '../request'
import { useMutation, useQueryClient } from 'react-query'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const newAnecMutation = useMutation(createAnecdote, {
    onSuccess: () => {  // when mutation is done successfully, React Query updates query named 'anecdotes' and gets anecdotes from server
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
