import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comp1 from './Comp1'
import './App.css'

var count = 0;
const 
[count, setCount] = useState(0);
function App() {
  return (
    <>
      <Comp1/>
      <p>count: {count}</p>
      <button onClick={
        () => 
          {
        
          setCount(count)=>count+1</>
          }
      } > Click Here</button>
      </>
      
  )
}

export default App
