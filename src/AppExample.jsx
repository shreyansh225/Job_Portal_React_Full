import {React, useState} from 'react'

const AppExample = () => {
 
  const [revealed, setRevealed] = useState(false);
  const names = ['rahul','ankit', 'ritik',]
  const loggedIn  = false   // try with true and see difference
  const stylesExample = {
    color: 'red', fontSize:'34px'
  }


  return (
    <>
    <div className='text-5xl'> App </div>
    <p style= {{color: 'red', fontSize:'24px'}} > Hello {names[0]}</p>
    <p style= {stylesExample} > Hello {names[1]}</p>
    <ul>
        {names.map( (nam, index) => (
            <li key={index}>{nam}</li>
          ))}
    </ul>
    {loggedIn ? <h1> Hello Member</h1> : <h1> Hello Unknown guy</h1>}
    {loggedIn && <h1> Hello Member</h1> }

    <form>
      <input className="border " type={revealed ? "text" : "password"} />
      <button type="button" onClick={() => setRevealed(!revealed)}>Reveal Eye Icon</button>
    </form>
    </>
  )
}

export default AppExample



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
