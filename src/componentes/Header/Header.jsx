import React from 'react'
import './Header.css'
// import './styleComponents.css';

function Header() {
    return (
        <nav className='papaNav'>
            <h1 className='Nombre'>K.L</h1>
            <ul className='Container-Options'>

                <li><a href="https://github.com/klopezg95">GitHub</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
        </nav>

    )
}

export default Header