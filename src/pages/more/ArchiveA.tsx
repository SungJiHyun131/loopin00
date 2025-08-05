import React, { useState, useEffect } from 'react';
import './ArchiveA.css';
import { useOutletContext } from 'react-router-dom';

import img1 from '../../assets/img/archive/1.png';
import img2 from '../../assets/img/archive/2.png';
import img3 from '../../assets/img/archive/3.png';
import img4 from '../../assets/img/archive/4.png';
import img13 from '../../assets/img/archive/5.png';
import img6 from '../../assets/img/archive/6.png';
import img7 from '../../assets/img/archive/7.png';
import img8 from '../../assets/img/archive/8.png';
import img9 from '../../assets/img/archive/9.png';
import img10 from '../../assets/img/archive/10.png';
import img11 from '../../assets/img/archive/11.png';
import img12 from '../../assets/img/archive/12.png';
import img5 from '../../assets/img/archive/13.png';
import img14 from '../../assets/img/archive/14.png';
import img15 from '../../assets/img/archive/15.png';
import img16 from '../../assets/img/archive/16.png';
import img17 from '../../assets/img/archive/17.png';
import img18 from '../../assets/img/archive/18.png';

import icon1 from '../../assets/img/archive/icon1.png';
import icon2 from '../../assets/img/archive/icon2.png';

interface MyArchiveContext {
  deleteMode: boolean;
  selectedIndexes: number[];
  setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  setDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ArchiveItem {
  img: string;
  icon?: string;
}

const ArtistA: React.FC = () => {
  const { deleteMode, selectedIndexes, setSelectedIndexes, setDeleteMode } = useOutletContext<MyArchiveContext>();

  const [items, setItems] = useState<ArchiveItem[]>([
    { img: img1, icon: icon1 },
    { img: img2, icon: icon2 },
    { img: img3 },
    { img: img4 },
    { img: img5, icon: icon1 },
    { img: img6, icon: icon1 },
    { img: img7 },
    { img: img8, icon: icon1 },
    { img: img9, icon: icon2 },
    { img: img10 },
    { img: img11, icon: icon1 },
    { img: img12, icon: icon1 },
    { img: img13 },
    { img: img14 },
    { img: img15, icon: icon1 },
    { img: img16 },
    { img: img17, icon: icon1 },
    { img: img18 },
  ]);

  const [showToast, setShowToast] = useState(false);

  const toggleSelect = (index: number) => {
    if (!deleteMode) return;
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const deleteSelectedItems = () => {
    if (selectedIndexes.length === 0) return; // 선택 없으면 무시

    const newItems = items.filter((_, idx) => !selectedIndexes.includes(idx));
    setItems(newItems);
    setSelectedIndexes([]);
    setDeleteMode(false);

    // 토스트 띄우기
    setShowToast(true);
  };

  // 2초 후에 토스트 자동 숨김
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

// (중략)

return (
  <div>
{deleteMode && (
  <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between',width:"100%",    color: '#111',
    backgroundColor: 'transparent',
    border: 'none',
    font: 'inherit',        // 시스템 기본 폰트 제거
    appearance: 'none',     // iOS 기본 버튼 스타일 제거
    WebkitAppearance: 'none'}}>
    <button onClick={deleteSelectedItems}>선택 삭제</button>
    <button
      onClick={() => {
        setDeleteMode(false);
        setSelectedIndexes([]);
      }}
    >
      취소
    </button>
  </div>
)}
    <div className="archive-gridA">
    {items.map((item, index) => {
  const isSelected = selectedIndexes.includes(index);
  return (
    <div
      key={index}
      className={`archive-item ${deleteMode ? 'deletable' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => toggleSelect(index)}
      style={{ position: 'relative' }} // 오버레이 위치를 위해 relative 필요
    >
      <img src={item.img} alt={`archive-${index}`} className="archive-img" />
      {item.icon && <img src={item.icon} alt="icon" className="archive-icon" />}
      
      {/* 삭제모드일 때 선택된 항목에 오버레이와 체크 아이콘 */}
      {deleteMode && isSelected && (
        <div className="overlay-checkmark">
          ✓
        </div>
      )}
    </div>
  );
})}
    </div>

    {/* 토스트 메시지 */}
    {showToast && (
      <div style={{
        position: 'fixed',
        top:'20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(253, 253, 255, 0.7)',
        color: '#111',
        padding: '10px 20px',
        borderRadius: 20,
        fontSize: 14,
        zIndex: 9999,
        fontWeight:500,
        pointerEvents: 'none',
        border:'1px solid #111'
      }}>
        삭제 완료!
      </div>
    )}
  </div>
);

};

export default ArtistA;
