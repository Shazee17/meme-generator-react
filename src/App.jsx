import React from 'react'
import Header from './Components/Header'
import Meme from './Components/Meme'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Meme/>
    </div>
  )
}

export default App