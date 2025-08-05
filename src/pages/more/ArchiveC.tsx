import React from 'react';
import './ArchiveC.css';
import profile from '../../assets/img/archive/profileimg.png';
import feed1 from '../../assets/img/archive/feed1.png';
import feed2 from '../../assets/img/archive/feed2.png';
import feed3 from '../../assets/img/archive/feed3.png';
import feed4 from '../../assets/img/archive/feed4.png';
import feed5 from '../../assets/img/archive/feed5.png';
import feed6 from '../../assets/img/archive/feed6.png';
import feed7 from '../../assets/img/archive/feed7.png';
import feed8 from '../../assets/img/archive/feed8.png';

import { useOutletContext } from 'react-router-dom';

interface FeedItem {
  id: number;
  text: string;
  time: string;
  img: string;
}

interface MyArchiveContext {
  deleteMode: boolean;
  selectedIndexes: number[];
  setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  setDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialFeeds: FeedItem[] = [
  { id: 1, text: '로희 목소리 진짜 너무 좋아서 계속 듣게 돼... 플레이리스트에 추가 완료 🎧 !!', time: '1시간 전', img: feed1 },
  { id: 2, text: '이 무대는 그냥 소장각... 진짜 눈 뗄 수 없었다 집가서 또 봐야지', time: '2시간 전', img: feed2 },
  { id: 3, text: 'bomb 무대 봤는데 너무 멋있었어 👏 무대 장인들 인정', time: '1주 전', img: feed3 },
  { id: 4, text: '역시 블랙핑크... 진짜 매번 레전드 갱신하는 듯 ㅎㅎ', time: '1주 전', img: feed4 },
  { id: 5, text: '오늘도 로하 영상 보면서 힘내는 중 💝 덕분에 하루가 달라', time: '1주 전', img: feed5 },
  { id: 6, text: '블핑은 내 최애야 진심으로. 힘들 때마다 위로받는 느낌이야 ㅜㅜ', time: '1주 전', img: feed6 },
  { id: 7, text: '아일릿 bomb 활동 너무 멋졌어! 다같이 있는 무대는 진짜 최고였음 🔥', time: '2주 전', img: feed7 },
  { id: 8, text: '요즘 아일릿 보면서 빠져들고 있음... 비주얼이랑 실력 둘 다 갖췄다', time: '3주 전', img: feed8 },
];

const ArchiveC: React.FC = () => {
  const { deleteMode, selectedIndexes, setSelectedIndexes, setDeleteMode } = useOutletContext<MyArchiveContext>();
  const [feeds, setFeeds] = React.useState<FeedItem[]>(initialFeeds);

  const toggleSelect = (index: number) => {
    if (!deleteMode) return;
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const deleteSelectedFeeds = () => {
    if (selectedIndexes.length === 0) return;
    setFeeds(feeds.filter((_, idx) => !selectedIndexes.includes(idx)));
    setSelectedIndexes([]);
    setDeleteMode(false);
  };

  return (
    <div>
      {/* 삭제 모드일 때만 보이는 선택삭제 / 취소 버튼 */}
      {deleteMode && (
        <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between' ,color:'#111'}}>
          <button onClick={deleteSelectedFeeds}>선택 삭제</button>
          <button onClick={() => { setDeleteMode(false); setSelectedIndexes([]); }}>취소</button>
        </div>
      )}

      <div className="artist-c-wrapper">
        {feeds.map((feed, index) => {
          const isSelected = selectedIndexes.includes(index);
          return (
            <div
              key={feed.id}
              className={`feed-card ${deleteMode ? 'deletable' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleSelect(index)}
              style={{ position: 'relative', cursor: deleteMode ? 'pointer' : 'default' }}
            >
              <div className="feed-header">
                <img src={profile} alt="프로필" className="feed-profile" />
                <div className="feed-info">
                  <p className="feed-text">{feed.text}</p>
                  <p className="feed-time">{feed.time}</p>
                </div>
              </div>
              <img src={feed.img} alt="게시물" className="feed-img" />
              {deleteMode && (
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    fontSize: '20px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    textAlign: 'center',
                    border: '1px solid #333',
                    userSelect: 'none',
                    lineHeight: '22px',
                    fontWeight: '500',
                  }}
                >
                  {isSelected ? '✓' : ''}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArchiveC;
