import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'


function Home() {

  const[isLog , setLog] = useState(true);
 
  return <div className='homeContainer'>
    <h1>LOGO</h1>
    <div className='sectionContainer'>
      <section className='leftSection'>
        <p>
          TEXT WILL BE DISPLAYED HERE
        </p>
      </section>
      <section className='rightSection'>
          {

          }
      </section>
    </div>
  </div>
}

export default Home