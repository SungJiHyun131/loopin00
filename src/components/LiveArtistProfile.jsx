import React from 'react'
import './LiveArtistProfile.css'
const LiveArtistProfile = ({ artist }) => {
    return (
        <div className="Live-artist-profile">
        <div className={`outer-ring ${artist.isLive ? 'live' : ''}`}>
          <div className="inner-ring">
            <img src={artist.img} alt={artist.name} />
          </div>
          {artist.isLive && <div className="live-badge">LIVE</div>}
        </div>
        <p className="artist-name">{artist.name}</p>
      </div>
    )
  }
  

export default LiveArtistProfile