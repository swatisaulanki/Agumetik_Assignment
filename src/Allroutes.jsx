import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Shome from './Slidehome/Shome'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shome" element={<Shome/>} />

      </Routes>
    </div>
  )
}

export default Allroutes
