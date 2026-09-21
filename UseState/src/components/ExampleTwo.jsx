import React, { useState } from 'react'

const ExampleTwo = () => {

    const [randomNumber, setRandomNumber] = useState(() => 
        Math.floor(Math.random() * 1000)
    )

    const generateNewNumber = () =>
    {
       const newNumber = Math.floor(Math.random() * 100)
       setRandomNumber(newNumber)
    }

  return (
    <div>
        
        <h1>RandomNumber:{randomNumber}</h1>
        <button onClick={generateNewNumber}>Generate New Number</button>
    </div>
  )
}

export default ExampleTwo