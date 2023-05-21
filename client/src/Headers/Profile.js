import React, { useState } from 'react'
import Preview from './Preview'
import close from '.././Images/close.svg'
function Profile({setUploadProfile}) {
    const [profile_pic, setprofile_pic] = useState('')
    return (
        <div className='ProfileCard'>
            <div className='inputContainer'>
                <div className='titleContainer'>
                    <label>Profile Picture</label>
                    <img src={close} alt='Close Icon' 
                    onClick={() =>setUploadProfile(false)}
                    />
                </div>
                <input type="file" filename="profile_pic" onChange={(e) => {
                    setprofile_pic(e.target.files[0])
                }}
                />
            </div>
            <div>
                {
                    profile_pic ? <Preview post={URL.createObjectURL(profile_pic)} /> : ""
                }
                {
                    profile_pic ? <button
                        onClick={() => {
                            console.log(profile_pic)
                        }}
                    >Add</button> : ""
                }
            </div>
        </div>

    )
}

export default Profile