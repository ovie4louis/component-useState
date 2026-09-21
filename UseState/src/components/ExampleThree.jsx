import React, { useState } from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem("name");
        return saveName? JSON.parse(saveName) : "";
    })

    const handleClear = () => setName("")

    useEffect = () => {
        localStorage.getItem("name", JSON.stringify(name))
    , [name]}

    const handleChange = (event) => {
        setName(event.target.value)

    }


  return (
    <div>
        <h1>Your name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} placeholder='Enter your Name' />
        <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default ExampleThree