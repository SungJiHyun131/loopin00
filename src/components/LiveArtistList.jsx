import React from 'react'
import LiveArtistProfile from './LiveArtistProfile'
import './LiveArtistList.css'
import minju from '../assets/img/IllitHomeimg/Live/pr1.png'
import wonhee from '../assets/img/IllitHomeimg/Live/pr2.png'
import yunah from '../assets/img/IllitHomeimg/Live/pr3.png'
import moka from '../assets/img/IllitHomeimg/Live/pr4.png'
import roha from '../assets/img/IllitHomeimg/Live/pr5.png'
import all from '../assets/img/IllitHomeimg/Live/pr6.png'
const artists = [
    { id: 1, name: '민주', img: minju, isLive: true },
    { id: 2, name: '원희', img: wonhee , isLive: false  },
    { id: 3, name: '윤아', img: yunah, isLive: false },
    { id: 4, name: '모카', img: moka, isLive: false },
    { id: 5, name: '이로하', img: roha, isLive: false  },
    { id: 5, name: 'ALL', img: all, isLive: false  },
    // 더 추가 가능
  ]
  
  const LiveArtistList = () => {
    return (
      <div className="Live-artist-list-container">
        {artists.map((artist) => (
          <LiveArtistProfile key={artist.id} artist={artist} />
        ))}
      </div>
    )
}

export default LiveArtistList