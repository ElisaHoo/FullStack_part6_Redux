import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.newAnec.value  // referred to input-fields name
        event.target.newAnec.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`You added '${content}'`, 5))
    }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name='newAnec'/></div>
            <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote

