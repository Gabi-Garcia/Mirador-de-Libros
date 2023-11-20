import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'


//Rutas
import Home from'./pages/Home.jsx'
import About from'./pages/About.jsx'
import Heroes from'./pages/Heroes.jsx'
import Heroe from'./pages/Heroe.jsx'
import NotFound from'./pages/404.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter basename="/">
      <Routes>
             <Route path='/' element={<App />}>
               <Route index element= {<Home />} /> 
               <Route path='about' element={<About />} />     
               <Route path='heroes' element={<Heroes />} />     
               <Route path='heroe/:id' element={<Heroe />} /> 
               <Route path='*' element={<NotFound />} />            
             </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
