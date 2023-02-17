import { useState } from 'react'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './Logout'
import Profile from './Profile'


function App() {

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  )
}

export default App
