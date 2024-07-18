//eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { useParams, useNavigate } from 'react-router-dom'
import HeroeDetail from '../../components/LibroDetail/HeroeDetail'

import { getHeroe} from '../../api/data'
import './Heroe.css'

const Heroe = () => {
  const {id} = useParams()
  const heroe = getHeroe(id)
 console.log('SOY EL ID : ', heroe) 
  return (
    <>
    <div className='cadaLibroHeroe'>
      <HeroeDetail heroe={heroe}/>
      {/* <div className='iraLibros'>
                  <Link to="/heroes">Ir a LIBROS</Link>
                </div>  */}
    </div>
              
    </>
  )
}

export default Heroe 