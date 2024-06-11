import { useState } from 'react'
import './App.css'

import Navbar from './Component/Navbar'
import './CustomFont.css'
import Question from './Component/Question'
import Back from './Component/Back'
import Answer from './Component/Answer'
import Fab from './Component/Fab'
import Report from './Component/Report'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Back></Back>
      <div className='content'>
        <Question></Question>
      </div>
      <div className="starting">
            <div><h3>Answers(23)</h3></div>
            <div>sort by:</div>
        </div>
      <div className='content'>
        <Answer></Answer>
      </div>
      <Fab></Fab>

      {/* <Report></Report> */}
    </>
  )
}

export default App
