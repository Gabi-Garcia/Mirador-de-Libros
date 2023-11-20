// eslint-disable-next-line no-unused-vars
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
        <div className='App'>
              <header>
                <div className='nav'>
                  <nav>
                    <NavLink className="navLink" to="">HOME</NavLink>
                    <NavLink  className="navLink" to="about">ABOUT</NavLink>
                    <NavLink  className="navLink" to="heroes">LIBROS</NavLink>
                  </nav>
                </div>
              </header>
              <main>
                <Outlet></Outlet>
              </main>
              <footer>
                        <ul>
                  <li>
                    <a href="https://github.com/Gabi-Garcia"  target="_blank" rel="noreferrer" >
                      <div className="imgFooter">
                        <img src="/github.png" alt="Github-img" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gabriel-garcia-ab029b210/" target="_blank" rel="noreferrer" >
                      <div className="imgFooter">
                        <img src="/linkedin.png" alt="Linkedin-img" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gabriel.garcia.development@gmail.com">
                      <div className="imgFooter">
                        <img src="/email.png" alt="email-img" />
                      </div>
                    </a>
                  </li>      
                </ul>
                <p>Creado por Gabi-Garcia</p>              
              </footer>
        </div>
    </> 
  )
}
export default App
