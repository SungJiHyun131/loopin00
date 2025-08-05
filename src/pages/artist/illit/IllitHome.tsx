import React from 'react';
import { useLocation } from 'react-router-dom';
import ArtistHeader from '../../../components/ArtistHeader';
import NewMv from '../../../components/NewMv';
import Albums from '../../../components/Albums';
import Post from '../../../components/illitPostcard';
import './IllitHome.css';
import bg from '../../../assets/img/IllitHomeimg/bg-ArtistHome.png';
import headerbg from '../../../assets/img/bg-top.png';

const IllitHome: React.FC = () => {
  const location = useLocation();

  return (
    <div className='artistcontainer'>
      <div className="ArtistHeader">
        <ArtistHeader />
        <div className="artistheaderbg"><img src={headerbg} alt="" /></div>
      </div>
      <div className="container IllitHome">
        <div className="NewMv">
          <NewMv />
        </div>
        <div className="Albums">
          <Albums />
        </div>
        <div className="Posts">
          <Post />
        </div>
      </div>
      <div className="IllitHomebg"><img src={bg} alt="" /></div>
    </div>
  );
}

export default IllitHome;
