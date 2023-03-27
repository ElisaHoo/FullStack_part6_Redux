import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { createNotification, noNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
let anec = useSelector((state) => {
    return state.anecdote.filter((a) =>
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  })
  anec = anec.slice().sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(addVote(id)) // dispatching action type to reducer
    dispatch(createNotification(`You voted '${content}'`))
    setTimeout(() => {
        dispatch(noNotification())
    }, 5000)
  }

  return (
    <div>
    {anec
    .map(a => (
        <div key={a.id}>
              <div>{a.content}</div>
              <div>
                has {a.votes} votes
                <button onClick={() => vote(a.id, a.content)}>vote</button>
              </div>
        </div>
    ))}
    </div>
  )
}

export default AnecdoteList