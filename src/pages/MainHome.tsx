import React, { useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArtistCard from '../components/ArtistCard';
import { artistData, ArtistType } from '../components/ArtistCard'; // ArtistType 타입 추가 가정
import './MainHome.css';
import SearchBar from '../components/SearchBar';
import ChatbotButton from './ChatbotButton';
import ChatbotModal from '../components/ChatbotModal';
import wingleft from '../assets/img/wingleft.png';
import wingright from '../assets/img/wingright.png';

const MainHome: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const filteredArtists = artistData.filter((artist: ArtistType) =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  const location = useLocation();
  const navigate = useNavigate();

  const isChatbotOpen = location.pathname === '/MainHome/chatbot';

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container main">
      <SearchBar onChange={handleSearchChange} />
      {/* <p className="filter"><img src={filter} alt="" /></p> */}
      <div className="mainTop">
        <p className="wingleft">
          <img src={wingleft} alt="wing left" />
        </p>

        <div className="maintxt">
          <p className="txt1">나의 아티스트를 선택해주세요</p>
          <p className="txt2">Please select your artist</p>
        </div>

        <p className="wingright">
          <img src={wingright} alt="wing right" />
        </p>
      </div>

      <ArtistCard artists={filteredArtists} />

      <ChatbotButton onClick={() => navigate('/MainHome/chatbot')} />

      {isChatbotOpen && <ChatbotModal onClose={() => navigate('/MainHome')} />}
    </div>
  );
};

export default MainHome;