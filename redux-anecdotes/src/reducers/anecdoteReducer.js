import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      return state.map(a => a.id !== action.payload.id ? a : action.payload)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const addVote = id => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    let anecdoteToVote = anecdotes.find(n => n.id === id)
    let updatedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
    const vote = await anecdoteService.castVote(id, updatedAnecdote)
    dispatch(voteAnecdote(vote))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()  // get all anecdotes from the server
    dispatch(setAnecdotes(anecdotes))  // dispatch action (=setAnecdotes), that adds anecdotes to the store
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer