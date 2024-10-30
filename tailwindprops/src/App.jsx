import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let data = {
    name: 'chill_czar',
    channel: 'chai aur code'
  }
  return (
    <>

      <h1 className='underline bg-blue rounded-50% font-bold border '>hello world </h1>
      <Card />
    <Card channel="chai aur code" name ="JIMMY" {...data} />
    </>
  )
}

export default App
