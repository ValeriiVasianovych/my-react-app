import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ControlledCarousel from './components/ControlledCarousel'
import BasicExample from './components/Navbar'
import CardExample from './components/Card'
import WithHeaderAndQuoteExample from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicExample />
      <ControlledCarousel />
      <CardExample />
      <WithHeaderAndQuoteExample />
    </>
  )
}

export default App
