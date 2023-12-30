import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { About, Home, OurService } from '../Views'



const AppRouter = () => {
    let history = useNavigate()
    let dispatch = useDispatch();    
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/service" exact element={<OurService/>}/>
    </Routes>
  )
}

export default AppRouter
