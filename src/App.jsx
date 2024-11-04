import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ControlledCarousel from './components/ControlledCarousel'
import BasicExample from './components/Navbar'
import CardExample from './components/Card'
import WithHeaderAndQuoteExample from './components/Footer'
import Todoapp from './components/todo-app/Todoapp'

function App() {

  return (
    <>
      {/* <BasicExample />
      <ControlledCarousel />
      <CardExample />
      <WithHeaderAndQuoteExample /> */}
      <Todoapp/>
      {/* <div className='h-10 w-10'>123</div> */}
    </>
  )
}

export default App
