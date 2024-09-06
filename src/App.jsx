import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {

  return (
    <main className="relative">
      <NavBar />
      <Hero />
    </main>
  )
}

export default App
