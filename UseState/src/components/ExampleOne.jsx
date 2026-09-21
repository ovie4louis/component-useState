import React, { useState } from 'react'

const ExampleOne = () => {
  const [count, setCount] = useState(() =>
    {
      const initialCount = 10
      return initialCount
    }
  )

  const increment = () =>
  {
    setCount((precount) => precount + 1)

  }

  const decrement = () => {
    setCount ((precount) => precount -1)
  }


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ExampleOne