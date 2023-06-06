import React, { SyntheticEvent, useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

function Register() {
  
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()


        const response = await fetch('http://192.168.1.221:5094/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const content = await response.json();

        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to='/login'/>
    }

    return (
        <div className='d-flex flex-column align-items-center gap-1'>
            <h1>Register</h1>
            <form onSubmit={submit} className='d-flex flex-column align-items-center gap-1'>
                <input onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Name' />
                <input onChange={(e) => { setEmail(e.target.value) }} type='text' placeholder='Email' />
                <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register