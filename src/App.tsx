import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Splash from './pages/intro/Splash';
import Onboarding from './pages/intro/Onboarding';
import Login from './pages/intro/Login';
import MainHome from './pages/MainHome';
import ArtistHome from './pages/artist/ArtistHome';
import ArtistProfile from './pages/artist/illit/ArtistProfile';
import ArtistA from './pages/artist/illit/ArtistA';
import ArtistB from './pages/artist/illit/ArtistB';
import Dm from './pages/Dm';
import Alarm from './pages/Alarm';
import MoreHome from './pages/more/MoreHome';
import MyArchive from './pages/more/MyArchive';
import ArchiveA from './pages/more/ArchiveA';
import ArchiveB from './pages/more/ArchiveB';
import ArchiveC from './pages/more/ArchiveC';
import ArchiveD from './pages/more/ArchiveD';
import Subscribe from './pages/more/Subscribe';
import SubscribeSelect from './pages/more/SubscribeSelect';
import SubscribeSelectDetail from './pages/more/SubscribeSelectDetail';
import AboutLoopin from './pages/more/AboutLoopin';
import Layout from './components/Layout';
import NoticeHome from './pages/artist/notice/NoticeHome';
import NoticeDetail from './pages/artist/notice/NoticeDetail';
import StoreHome from './pages/artist/store/StoreHome';
import StoreDetail from './pages/artist/store/StoreDetail';
import MediaHome from './pages/artist/media/MediaHome';
import MediaA from './pages/artist/media/MediaA';
import MediaB from './pages/artist/media/MediaB';
import IllitHome from './pages/artist/illit/IllitHome';
import FanHome from './pages/artist/fan/FanHome';
import FanPostDetail from './pages/artist/fan/FanPostDetail';
import FanPostWrite from './pages/artist/fan/FanPostWrite';
import FanLetter from './pages/artist/fan/FanLetter';
import FanPostView from './pages/artist/fan/FanPostView';
import SecretLetter from './pages/artist/fan/SecretLetter';
import LiveHome from './pages/artist/live/LiveHome';
import LiveDetail from './pages/artist/live/LiveDetail';
import ChatbotModal from './components/ChatbotModal';
import ChatbotView from './components/ChatbotView';

const App: React.FC = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/Onboarding" element={<Onboarding />} />
      <Route path="/Login" element={<Login />} />

      {/* ✅ 메인 앱 라우트 (Layout 포함) */}
      <Route path="/MainHome" element={<Layout />}>
        <Route index element={<MainHome />} />
      </Route>

      <Route path="/MainHome/chatbot" element={<ChatbotModal />} />
      <Route path="/ChatbotView" element={<ChatbotView />} />
      <Route path="ArtistHome" element={<ArtistHome />} />
      <Route path="Dm" element={<Dm />} />
      <Route path="Alarm" element={<Alarm />} />
      <Route path="MoreHome" element={<MoreHome />} />

      <Route path="MyArchive" element={<MyArchive />}>
        <Route index element={<ArchiveA />} />
        <Route path="ArchiveA" element={<ArchiveA />} />
        <Route path="ArchiveB" element={<ArchiveB />} />
        <Route path="ArchiveC" element={<ArchiveC />} />
        <Route path="ArchiveD" element={<ArchiveD />} />
      </Route>

      <Route path="Subscribe" element={<Subscribe />} />
      <Route path="SubscribeSelect" element={<SubscribeSelect />} />
      <Route path="SubscribeSelectDetail" element={<SubscribeSelectDetail />} />

      <Route path="AboutLoopin" element={<AboutLoopin />} />
      <Route path="NoticeHome" element={<NoticeHome />} />
      <Route path="NoticeDetail" element={<NoticeDetail />} />
      <Route path="StoreHome" element={<StoreHome />} />
      <Route path="StoreDetail" element={<StoreDetail />} />

      <Route path="MediaHome" element={<MediaHome />}>
        <Route index element={<MediaA />} />
        <Route path="MediaA" element={<MediaA />} />
        <Route path="MediaB" element={<MediaB />} />
      </Route>

      <Route path="IllitHome" element={<IllitHome />} />

      <Route path="ArtistProfile" element={<ArtistProfile />}>
        <Route index element={<ArtistA />} />
        <Route path="ArtistA" element={<ArtistA />} />
        <Route path="ArtistB" element={<ArtistB />} />
      </Route>

      <Route path="LiveHome" element={<LiveHome />} />
      <Route path="LiveDetail" element={<LiveDetail />} />
      <Route path="ArtistProfile" element={<ArtistProfile />} />

      <Route path="FanHome" element={<FanHome />}>
        <Route index element={<FanPostDetail />} />
        <Route path="FanPostDetail" element={<FanPostDetail />} />
        <Route path="FanPostWrite" element={<FanPostWrite />} />
      </Route>

      <Route path="FanLetter" element={<FanLetter />} />
      <Route path="/FanPostView/:id" element={<FanPostView />} />
      <Route path="SecretLetter" element={<SecretLetter />} />
    </Routes>
    </>
  );
};

export default App;
