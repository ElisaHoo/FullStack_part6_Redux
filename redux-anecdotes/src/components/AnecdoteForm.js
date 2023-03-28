import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { createNotification, noNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.newAnec.value  // referred to input-fields name
        event.target.newAnec.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(createNotification(`You added '${content}'`))
        setTimeout(() => {
            dispatch(noNotification())
        }, 5000)
    }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name='newAnec'/></div>
            <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote

