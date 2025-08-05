import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import Post from '../../../components/illitPostcard2';
import './ArtistProfile.css'
const ArtistA = () => {
   const location =useLocation();
  return (
    <div>
      <div className="Posts">
          <Post/>
        </div>
    </div>
  )
}

export default ArtistA