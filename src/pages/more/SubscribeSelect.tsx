import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import SubscribeHeader2 from '../../components/SubscribeHeader2';
import SelectArtist from '../../components/SelectArtist';
import './SubscribeSelect.css';

import aespa from '../../assets/img/SubscribeImg/aespa.png';
import ATEEZ from '../../assets/img/SubscribeImg/ATEEZ.png';
import BABYMONSTER from '../../assets/img/SubscribeImg/BABY MONSTER.png';
import blackpink from '../../assets/img/SubscribeImg/blackpink.png';
import BOYNEXTDOOR from '../../assets/img/SubscribeImg/BOYNEXTDOOR.png';
import ENHYPHEN from '../../assets/img/SubscribeImg/ENHYPHEN.png';
import fromis from '../../assets/img/SubscribeImg/fromis.png';
import H2H from '../../assets/img/SubscribeImg/H2H.png';
import illit from '../../assets/img/SubscribeImg/illit.png';
import ive from '../../assets/img/SubscribeImg/ive.png';
import KATSEYE from '../../assets/img/SubscribeImg/KATSEYE.png';
import LESSERAPIM from '../../assets/img/SubscribeImg/LESSERAPIM.png';
import meovv from '../../assets/img/SubscribeImg/meovv.png';
import nct from '../../assets/img/SubscribeImg/nctwish.png';
import REDVELVET from '../../assets/img/SubscribeImg/REDVELVET.png';
import riize from '../../assets/img/SubscribeImg/riize.png';
import seventeen from '../../assets/img/SubscribeImg/seventeen.png';
import SHINEE from '../../assets/img/SubscribeImg/SHINEE.png';
import TWICE from '../../assets/img/SubscribeImg/TWICE.png';
import TWS from '../../assets/img/SubscribeImg/TWS.png';
import TXT from '../../assets/img/SubscribeImg/TXT.png';
import SearchBar from '../../components/SearchBar';

interface Idol {
  name: string;
  image: string;
}

const idols: Idol[] = [
  { name: 'AESPA', image: aespa },
  { name: 'ATEEZ', image: ATEEZ },
  { name: 'BABY MONSTER', image: BABYMONSTER },
  { name: 'BLACKPINK', image: blackpink },
  { name: 'BOYNEXTDOOR', image: BOYNEXTDOOR },
  { name: 'ENHYPHEN', image: ENHYPHEN },
  { name: 'FROMIS_9', image: fromis },
  { name: 'H2H', image: H2H },
  { name: 'ILLIT', image: illit },
  { name: 'IVE', image: ive },
  { name: 'KATSEYE', image: KATSEYE },
  { name: 'LESSERAPIM', image: LESSERAPIM },
  { name: 'MEOVV', image: meovv },
  { name: 'NCT WISH', image: nct },
  { name: 'REDVELVET', image: REDVELVET },
  { name: 'RIIZE', image: riize },
  { name: 'SEVENTEEN', image: seventeen },
  { name: 'SHINEE', image: SHINEE },
  { name: 'TWICE', image: TWICE },
  { name: 'TWS', image: TWS },
  { name: 'TXT', image: TXT },
];
const SubscribeSelect: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');

  const toggleSelect = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // query 기반 필터링
  const filteredIdols = idols.filter((idol) =>
    idol.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bgSub">
      <div className="SubscribeHeader2">
        <SubscribeHeader2 />
      </div>
      <div className="container SubscribeSelect">
        <div className="top">
          <h3>관심있는 아티스트를 구독하세요</h3>
          <p>구독한 아티스트는 구독 갱신일 기준 3일 전까지 해지할 수 있어요</p>
        </div>
        <SearchBar onChange={handleSearchChange} />
        <div className="SelectArtist-grid">
          {filteredIdols.map((idol, idx) => (
            <SelectArtist
              key={idx}
              image={idol.image}
              name={idol.name}
              isSelected={selected.includes(idol.name)}
              onClick={() => toggleSelect(idol.name)}
            />
          ))}
        </div>

        {selected.length > 0 && (
          <div className="complete-btn">
            <Link to="/SubscribeSelectDetail">선택완료 ({selected.length})</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribeSelect;
