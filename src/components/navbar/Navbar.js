import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='counter' className="nav-link">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='shop' className="nav-link">Shop</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar