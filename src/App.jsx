import { Routes, Route } from "react-router-dom"

import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import SignIn from './components/SignIn/SignIn'

import './App.scss';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/sign-in-page" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
