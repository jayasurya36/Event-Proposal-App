import React, { useState } from 'react'
import { useAppContext } from '../contexts/ContextProvider'
import image from '../Images/user.png'
import { Outlet } from 'react-router';
import ProfileCard from './ProfileCard';

export default function Header() {
  const { userDetails } = useAppContext();
  const [card, setCard] = useState(true);
  const[profileImage , setProfileImage] = useState(userDetails.user.profile_pic);
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
            {profileImage === null ? <img src={image} /> :
              <img src={userDetails.user.profile_pic} alt='profileImage'/>}
          </div>
          {card ? "" : <ProfileCard setProfileImage={setProfileImage} setCard={setCard} />}
        </div>
      </div>
      <Outlet />
    </div>
  }
}