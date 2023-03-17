import React from "react"
import counterReducer from "./reducer"
import ReactDOM from 'react-dom/client'
import { createStore } from "redux"
import { render } from "@testing-library/react"

const store = createStore(counterReducer)

const App = () => {
    return (
      <div>
        <h2>Give Feedback</h2>
        <button 
          onClick={() => store.dispatch({ type: 'GOOD' })}>
          Good
        </button>
        <button
          onClick={() => store.dispatch({ type: 'OK' })}>
          Ok
        </button>
        <button 
          onClick={() => store.dispatch({ type: 'BAD' })}>
          Bad
        </button>
        <button 
          onClick={() => store.dispatch({ type: 'ZERO' })}
        >
          Reset stats
        </button>
        <h3>Statistics</h3>
        <div>
          Good {store.getState().good}
        </div>
        <div>
          Ok {store.getState().ok}
        </div>
        <div>
          Bad {store.getState().bad}
        </div>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))

  const renderApp = () => {
    root.render(<App />)
  }

  renderApp()
  store.subscribe(renderApp)