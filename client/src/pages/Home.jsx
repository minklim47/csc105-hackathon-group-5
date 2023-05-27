import React from 'react'
import Profile from '../components/profile'
import Star from '../components/Star'
import moon from '../assets/moon.png'

function Home() {
  return (
    <div>Home
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <img style={moonStyle} src={moon}/>
    </div>
  )
}


export default Home
const moonStyle ={ 
    position:"fixed",
    maxWidth:"800px",
    width:"70%",
    right:"-200px",
    bottom:"-300px",
    
    zIndex:"10",
}