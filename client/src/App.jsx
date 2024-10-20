import { useState } from 'react'
import Navbar from './components/navbar';
import Category from './components/category';
import Topresto from './components/topresto';
import Onlinedelivery from './components/onlinedelivery';
import Bestplace from './components/bestplace';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Category />
      {/* <Topresto />
      <Onlinedelivery />
      <Bestplace />
      <Footer /> */}
    </>
  )
}

export default App
