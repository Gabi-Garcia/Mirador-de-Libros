// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import { getHeroes} from '../api/data'
import  HeroeDetail from '../components/HeroeDetail'
import './Heroes.css'

const Heroes = () => {
  const heroes = getHeroes();
  console.log('Heroes ' , heroes) 
  return (
    <> 
    <div className='todosLosLibros'>
            <ul>
              {
                heroes.map((heroe)=>(
                  <li key={heroe.id}>
                    <Link to={`/heroe/${heroe.id}`}>
                      <HeroeDetail heroe={heroe} />
                      </Link>         
                  </li>
                  ))
                }
            </ul>
          <Outlet />
    </div>
    </>
  )
}

export default Heroes