import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function Main() {
  return (
      <main>
          <h1 className="main--title">Fun facts about React</h1>
          <ul className="main--facts">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </main>
  )
}

 function Navbar() {
  return (
      <nav>
          <img src="../images/react-icon-small.png" className="nav--icon" />  //idk why but the logo is not showing
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
  )
}

function App() {
  return (
    <div className="container">
        <Navbar />
        <Main />
    </div>
)
}

export default App
