import {Routes,Route}from "react-router-dom"
import Home from './home/Home'
import About from './about/About'


const RouteController = () => {
  return (
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
</Routes>
  )
}

export default RouteController
