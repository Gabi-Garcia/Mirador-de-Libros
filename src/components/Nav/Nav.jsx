import './Nav.css' 
import { NavLink} from 'react-router-dom';

const Nav = ()=> {

    return (
        <div className='nav'>
        <nav>
          <NavLink className="navLink" to="">HOME</NavLink>
          <NavLink  className="navLink" to="about">ABOUT</NavLink>
          <NavLink  className="navLink" to="heroes">LIBROS</NavLink>
        </nav>
      </div>

    )
}

export default Nav