import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

function AdminPanel() {
  const [name, setName] = useState('')
  const [isadmin, setIsadmin] = useState(false)
  const [isDataLoad, setisDataLoad] = useState(false)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    (async () => {
      const response = await fetch('http://192.168.1.221:5094/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      const user = await response.json();
      console.log("çalıştı")
      console.log(user)
      if (user === 'asd' || !user.admin) {
        setRedirect(true)
      }
      else if (user.admin) {
        setIsadmin(user.admin)
        setName(user.user.email)
        setisDataLoad(true)

      }

    })();
  }, [])
  if (redirect) {
    return <Navigate to='/login' />
  }
  return (
    <div className='text-center' style={{ backgroundColor: isadmin ? 'orangered' : 'blue', color: 'white', fontSize: '50px' }}>
      {!isDataLoad ? <> </> : <>
        hi {name} - welcome as  {isadmin}

        <ul className='d-flex justify-content-center gap-2 ' style={{ fontSize: '20px', listStyle: 'none' }}>
          <li>
            <Link to='/adminpanel/'>Panel amin </Link>
          </li>
          <li>
            <Link to='/adminpanel/adminpaneltask'>Panel task </Link>
          </li>
        </ul>
        <Outlet />
      </>
      }
    </div >
  )
}

export default AdminPanel