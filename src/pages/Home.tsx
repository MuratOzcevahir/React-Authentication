import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function Home() {
  const [name, setName] = useState('')
  const [isadmin, setIsadmin] = useState(false)
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    (async () => {
      const response = await fetch('http://192.168.1.221:5094/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      const user = await response.json();
      if (user != 'asd') {
        setIsadmin(user.admin)
        setName(user.user.email)
      }
      else {
        setRedirect(true)
        console.log('home login retiderc')
      }
      console.log({ name }, "user")
      console.log(isadmin)
    })();
  }, [])
  if (redirect)
  {
    return <Navigate to='/login' />
  }
  return (
    <div className='text-center' style={{ backgroundColor: isadmin ? 'green' : 'blue', color: 'white', fontSize: '50px' }}>{name === '' ? 'Not logged' : <>hi {name} - welcome as {isadmin === false ? 'gamer' : 'admin'}</>}</div>
  )
}

export default Home