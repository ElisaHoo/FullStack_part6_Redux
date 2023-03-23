import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.anecdote
        }
        return state.anecdote.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    })
    const vote = (id) => {
        dispatch(addVote(id))  // dispatching action type to reducer
    }

    return (
        <div>
            {anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes} votes  
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
      </div>
    )
  }
        </div>
    )
}

export default AnecdoteList