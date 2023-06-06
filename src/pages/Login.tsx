import React, { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

  //mumu@gmail.com, Abc1-Bb

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await fetch('http://192.168.1.221:5094/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to='/'/>
    }
    return (
        <div className=' d-flex flex-column align-items-center gap-1'>
            <h1>Login</h1>
            <form onSubmit={submit} className='d-flex flex-column align-items-center gap-1'>
                <input onChange={(e) => { setEmail(e.target.value) }} type='text' placeholder='Email' />
                <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login