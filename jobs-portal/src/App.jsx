import React from 'react'

const App = () => {
  const x = 20;
  const y = 30;
  const names = ['Brad', 'Mary', 'Sara'];
  const loggedIn = true;

  return (
    <>
      <div className='text-2xl'>App</div>
      <p>the sum of {x} and {y} is = {x + y}.</p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1>hi this is true.</h1> : ""}
      <p>Ternary operator can replace by && if else condition has noting</p>
      {loggedIn && <h1>the other part is false, its true part. </h1>}
      
    </>
  )
}

export default App