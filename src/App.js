import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Pages/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import BookTable from './Components/BookTable'
import Gallery from './Components/Gallery'
import Event from './Components/Event'

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path= '/reservation' element ={<BookTable/>}/>
        <Route path='/gallery' element= {<Gallery/>}/>
        <Route path= "/events" element= {<Event/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App