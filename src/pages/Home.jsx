/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
      <div className='home'>
          <h1>Mirador de Libros</h1>        
                <div className='iraLibros'>
                <Link to="heroes">Ir a LIBROS</Link>
                </div>
      </div>
  )
}

export default Home