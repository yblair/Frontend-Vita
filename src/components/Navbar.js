import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../assets/logo.png';
import '../scss/abstracts/navbar.scss'
import menuu from '../assets/menu.png'
import fb from '../assets/img-social-facebook.svg'
import ig from '../assets/img-social-instagram.svg'
import yt from '../assets/img-social-youtube.svg'


export default function Navbar() {

  const [menu, setMenu] = useState(false)

  function toggleMenu(){
    setMenu(!menu)
} 
  return (
    <div>
    <div className="nav-div">
        
        <Link className="link_create" to='/'>
        <img alt='logo vitalinea' src={logo} /> 
        </Link>
        <div>
        <button onClick={toggleMenu} className="nav-div-button">
        <img alt='logo menu' src={menuu}  className="menu-logo"/>  
        </button>

        <nav className={`toggle-nav ${ menu ? 'isactive' : ''}`}>
            <ul className="nav-ul">
                <li className="nav-li">
                <a href='/'>Nuestros Productos</a>
                </li>
                <li className="nav-li">
                <a href='/'>Disfruta Cuidarte</a>
                </li>
                <li className="nav-li">
                <a href='/'>Blog</a>
                </li>
                <li className="nav-li">
                <img alt='facebook' src={fb}  className="redes-logo"/>
                <img alt='instagram' src={ig}  className="redes-logo"/>
                <img alt='youtube' src={yt}  className="redes-logo"/>
                </li>
            </ul>
        </nav>
        </div>
    </div>
 
        </div>
  )
}

