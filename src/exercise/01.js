// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) => {
  if (typeof newState === 'function') {
    return {...state, ...newState(state)}
  }

  return {...state, ...newState}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
    iShouldNotGetLost: 'here I am',
  })

  const {count} = state
  const incrementWithFunction = () =>
    setState(currentState => ({count: currentState.count + step}))

  const incrementWithObject = () => setState({count: count + step})

  return (
    <>
      <button className={'buttonOne'} onClick={incrementWithFunction}>
        {count}
      </button>
      <button className={'buttonTwo'} onClick={incrementWithObject}>
        {count}
      </button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
