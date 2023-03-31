import { createAnecdote } from '../request'
import { useMutation, useQueryClient } from 'react-query'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch()

  const queryClient = useQueryClient()
  const newAnecMutation = useMutation(createAnecdote, {
    onSuccess: () => {  // when mutation is done successfully, React Query updates query named 'anecdotes' and gets anecdotes from server
      queryClient.invalidateQueries('anecdotes')
    },
    onError: () => {
      dispatch({ type: "SHOW", payload: 'Too short anecdote, must have length 5 or more' })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
    dispatch({ type: "SHOW", payload: `You added ${content}` })
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
