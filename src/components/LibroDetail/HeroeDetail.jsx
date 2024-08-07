/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './HeroeDetail.css'
//import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const HeroeDetail = ({ heroe }) => {
  console.log('HeroeDetail', heroe)
  return (
    <>
    <div className='detail'>
        <div className='card'>
          <img src={heroe.img} alt={heroe.titulo} /> 
        </div>
        <div className='detailSinopsis'> 
          <div className='detailSinopsisH5'>
          <h5>Título: {heroe.titulo}</h5>
          <h5>Autor: {heroe.autor}</h5>
          <h5>Editorial: {heroe.editorial}</h5>
          <h5>Segmento: {heroe.segmento}</h5>
          </div>
          <p>Sinopsis: {heroe.sinopsis}</p>
    {/* <div className='iraLibros'>
                  <Link to="/heroes">Ir a LIBROS</Link>
                </div>  */}
        </div>
    </div>
    </> 
  )
}
export default HeroeDetail