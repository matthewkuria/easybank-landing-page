import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {

  return (
    <main className="relative p-2 z-0">
      <NavBar />
      <Hero />
    </main>
  )
}

export default App
