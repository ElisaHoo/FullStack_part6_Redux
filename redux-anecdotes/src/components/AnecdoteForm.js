import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"


const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.newAnec.value  // referred to input-fields name
        event.target.newAnec.value = ''
        dispatch(createAnecdote(content)) 
    }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name='newAnec'/></div>
            <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote

