import { useState } from 'react'
import Navbar from './components/navbar';
import Category from './components/category';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Category />

    </>
  )
}

export default App
