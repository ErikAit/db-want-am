import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Category from './components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />

      <Category />
    </>
  )
}

export default App
