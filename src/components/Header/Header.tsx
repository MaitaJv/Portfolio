import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header_container'>
        <nav className='nav_header'>
            <ul className='ul_navbar'>
                <li>    <a className='link_header'>Sobre mi</a>     </li>
                <li>    <a className='link_header'>Formación</a>    </li>
                <li>    <a className='link_header'>Proyectos</a>    </li>
                <li>    <a className='link_header'>Contacto</a>     </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header