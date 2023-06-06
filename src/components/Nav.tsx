import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const logout = async () => {
        const response = await fetch('http://192.168.1.221:5094/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })

        // window.location.href = '/login'
    };

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <ul className="d-flex gap-5 ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/adminPanel">aadmin Panel </Link></li>
                <li><Link to="/login" onClick={logout}> logout  </Link></li>
            </ul>
        </div>
    )
}

export default Nav