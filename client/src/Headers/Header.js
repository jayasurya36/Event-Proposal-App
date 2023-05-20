import React, { useState } from 'react'
import { useAppContext } from '../contexts/ContextProvider'
import image from '../Images/user.png'
import { Outlet } from 'react-router';
import ProfileCard from './ProfileCard';

export default function Header() {
  const { userDetails } = useAppContext();
  const [card, setCard] = useState(true);
  if (userDetails === '') {
    return <div>
      Unauthorised
    </div>
  } else {
    return <div>
      <div className='headerContainer'>
        <div className='logoHolder'>
          LOGO
        </div>
        <div className='userDetails'>
          <div className='nameContainer'>
            {userDetails.user.name}
          </div>
          <div className='profileImageContainer' onClick={() => {
            setCard((card) => !card);
          }}>
            {userDetails.user.profile_pic === null ? <img src={image} /> :
              <img src={userDetails.profile_pic} />}
          </div>
          {card ? "" : <ProfileCard />}
        </div>
      </div>
      <Outlet />
    </div>
  }
}