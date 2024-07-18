/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { NavLink, Outlet } from 'react-router-dom';
import  Footer  from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx'
import './App.css';



const App = () =>  {
  return (
    <>
        <div className='App'>
              <header>
              <Nav />
              </header>
              <main>
                <Outlet></Outlet>
              </main>
             <Footer />
        </div>
    </> 
  )
}
export default App
