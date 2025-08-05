import React from 'react';
import { Link } from 'react-router-dom';
import './ArtistCard.css';

// 이미지들 import
import wish from '../assets/img/nctwish.png';
import aespa from '../assets/img/aespa.png';
import illit from '../assets/img/illit.png';
import blackpink from '../assets/img/blackpink.png';
import seventeen from '../assets/img/seventeen.png';
import promise9 from '../assets/img/promise9.png';
import boynextdoor from '../assets/img/boynextdoor.png';
import shinee from '../assets/img/shinee.png';
import twice from '../assets/img/twice.png';
import ive from '../assets/img/ive.png';
import le from '../assets/img/le.png';
import riize from '../assets/img/riize.png';
import en from '../assets/img/en.png';
import txt from '../assets/img/txt.png';
import bm from '../assets/img/bm.png';
import ateez from '../assets/img/ateez.png';
import tws from '../assets/img/tws.png';
import kat from '../assets/img/kat.png';
import red from '../assets/img/red.png';
import h2h from '../assets/img/h2h.png';

import wishLogo from '../assets/img/nctwish-logo.png';
import aespaLogo from '../assets/img/aespa-logo.png';
import illitLogo from '../assets/img/illit-logo.png';
import blackpinkLogo from '../assets/img/blackpink-logo.png';
import seventeenLogo from '../assets/img/seventeen-logo.png';
import promise9Logo from '../assets/img/promise9-logo.png';
import boynextdoorLogo from '../assets/img/boynextdoor-logo.png';
import shineeLogo from '../assets/img/shinee-logo.png';
import twiceLogo from '../assets/img/twice-logo.png';
import iveLogo from '../assets/img/ive-logo.png';
import leLogo from '../assets/img/le-logo.png';
import riizeLogo from '../assets/img/riize-logo.png';
import enLogo from '../assets/img/en-logo.png';
import txtLogo from '../assets/img/txt-logo.png';
import bmLogo from '../assets/img/bm-logo.png';
import ateezLogo from '../assets/img/ateez-logo.png';
import twsLogo from '../assets/img/tws-logo.png';
import katLogo from '../assets/img/kat-logo.png';
import redLogo from '../assets/img/red-logo.png';
import h2hLogo from '../assets/img/h2h-logo.png';

// 타입 정의
export interface Artist {
  name: string;
  img: string;
  logo: string;
  link?: string;
  isLink?: boolean;
}

// 아티스트 데이터
export const artistData: Artist[] = [
  { name: 'ILLIT', img: illit, logo: illitLogo, link: '/ArtistHome', isLink: true },
  { name: 'NCT WISH', img: wish, logo: wishLogo, link: '/ArtistHome', isLink: true },
  { name: 'AESPA', img: aespa, logo: aespaLogo, link: '/ArtistHome', isLink: true },
  { name: 'BLACKPINK', img: blackpink, logo: blackpinkLogo , link: '/ArtistHome', isLink: true},
  { name: 'SEVENTEEN', img: seventeen, logo: seventeenLogo, link: '/ArtistHome', isLink: true },
  { name: 'PROMISE9', img: promise9, logo: promise9Logo, link: '/ArtistHome', isLink: true },
  { name: 'BOYNEXTDOOR', img: boynextdoor, logo: boynextdoorLogo, link: '/ArtistHome', isLink: true },
  { name: 'SHINEE', img: shinee, logo: shineeLogo, link: '/ArtistHome', isLink: true },
  { name: 'TWICE', img: twice, logo: twiceLogo , link: '/ArtistHome', isLink: true},
  { name: 'IVE', img: ive, logo: iveLogo , link: '/ArtistHome', isLink: true},
  { name: 'LESSERAPIM', img: le, logo: leLogo, link: '/ArtistHome', isLink: true },
  { name: 'RIIZE', img: riize, logo: riizeLogo, link: '/ArtistHome', isLink: true },
  { name: 'ENHYPHEN', img: en, logo: enLogo, link: '/ArtistHome', isLink: true },
  { name: 'TxT', img: txt, logo: txtLogo , link: '/ArtistHome', isLink: true},
  { name: 'BABY MONSTER', img: bm, logo: bmLogo, link: '/ArtistHome', isLink: true },
  { name: 'ATEEZ', img: ateez, logo: ateezLogo , link: '/ArtistHome', isLink: true},
  { name: 'TWS', img: tws, logo: twsLogo, link: '/ArtistHome', isLink: true },
  { name: 'KATSEYE', img: kat, logo: katLogo, link: '/ArtistHome', isLink: true },
  { name: 'RED VELVET', img: red, logo: redLogo, link: '/ArtistHome', isLink: true },
  { name: 'HEARTS TO HEARTS', img: h2h, logo: h2hLogo , link: '/ArtistHome', isLink: true},
];

// 컴포넌트 타입 정의
interface ArtistCardProps {
  artists: Artist[];
}

// 컴포넌트 구현
const ArtistCard: React.FC<ArtistCardProps> = ({ artists }) => {
  if (artists.length === 0) {
    return <div className="no-result">검색 결과가 없습니다.</div>;
  }

  const sortedData = [...artists].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="cardlist">
      <ul>
        {sortedData.map((artist, index) => {
          const content = (
            <div className="artist-card">
              <img src={artist.img} alt={artist.name} className="artist-img" />
              <div className="artist-name-tag">{artist.name}</div>
            </div>
          );

          return (
            <li key={index}>
              {artist.isLink ? (
                <Link to={artist.link ?? '#'}>{content}</Link>
              ) : (
                <a href="#">{content}</a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArtistCard;
