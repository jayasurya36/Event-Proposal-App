import React from 'react'
import { useAppContext } from '../contexts/ContextProvider'
import image from '../Images/user.png'
import { Outlet } from 'react-router';

export default function Header() {
  const { userDetails } = useAppContext();
  console.log(userDetails)
  return <div>
    <div className='headerContainer'>
      <div className='logoHolder'>
        LOGO
      </div>
      <div className='userDetails'>
        <div className='nameContainer'>
          {userDetails.user.name}
        </div>
        <div className='profileImageContainer'>
          {userDetails.user.profile_pic === null ? <img src={image} /> :
            <img src={userDetails.profile_pic} />}
        </div>
      </div>
    </div>
    <Outlet/>
  </div>
}

