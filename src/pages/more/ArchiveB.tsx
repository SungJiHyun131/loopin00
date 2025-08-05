import React, { useState } from 'react';
import './ArchiveB.css';
import { useOutletContext } from 'react-router-dom';

import thum1 from '../../assets/img/archive/thum1.png';
import thum2 from '../../assets/img/archive/thum2.png';
import thum3 from '../../assets/img/archive/thum3.png';
import thum4 from '../../assets/img/archive/thum4.png';
import thum5 from '../../assets/img/archive/thum5.png';
import thum6 from '../../assets/img/archive/thum6.png';
import thum8 from '../../assets/img/archive/thum8.png';

interface MyArchiveContext {
  deleteMode: boolean;
  selectedIndexes: number[];
  setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  setDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialData = [
  { id: 1, image: thum1, title: '전체 보기' },
  { id: 2, image: thum2, title: '최애 모먼트 💕' },
  { id: 3, image: thum4, title: '🐹 커여운 워니 모음집' },
  { id: 4, image: thum3, title: '아일릿 굿즈' },
  { id: 5, image: thum6, title: '배경화면 ZIP' },
  { id: 6, image: thum5, title: '💚 위시 애긔들 💚' },
  { id: 7, image: thum8, title: '새 컬렉션 만들기' },
];

const ArchiveB: React.FC = () => {
  const { deleteMode, selectedIndexes, setSelectedIndexes, setDeleteMode } = useOutletContext<MyArchiveContext>();
  const [archiveData, setArchiveData] = useState(initialData);

  // 새 컬렉션 추가 함수는 삭제 모드 아닐 때만 동작
  const handleAddCollection = () => {
    if (deleteMode) return; 
    const newTitle = prompt('새 컬렉션 이름을 입력하세요');
    if (newTitle) {
      const newId = archiveData.length + 1;
      setArchiveData([
        ...archiveData.slice(0, archiveData.length - 1),
        {
          id: newId,
          image: thum8,
          title: newTitle,
        },
        archiveData[archiveData.length - 1],
      ]);
    }
  };

  // 아이템 선택 토글 (삭제 모드일 때만)
  const toggleSelect = (index: number) => {
    if (!deleteMode) return;
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  // 선택한 항목 삭제
  const deleteSelectedItems = () => {
    if (selectedIndexes.length === 0) return;
    const newData = archiveData.filter((_, idx) => !selectedIndexes.includes(idx));
    setArchiveData(newData);
    setSelectedIndexes([]);
    setDeleteMode(false);
  };

  return (
    <div className="artist-b-container">
      {/* 삭제모드일 때 선택삭제, 취소 버튼 노출 */}
      {deleteMode && (
       <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between',width:"100%",color:"#111"}}>
          <button onClick={deleteSelectedItems}>선택 삭제</button>
          <button onClick={() => { setDeleteMode(false); setSelectedIndexes([]); }}>취소</button>
        </div>
      )}

      <div className="archive-grid">
        {archiveData  .filter(item => !(deleteMode && item.id === 7))  // 삭제모드일 때 새 컬렉션 아이템 제외
  .map((item, index) => {
    const isSelected = selectedIndexes.includes(index);
          const isAddCollection = item.id === 7;

          return (
            <div
              key={item.id}
              className={`archive-card ${deleteMode ? 'deletable' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                if (isAddCollection) {
                  handleAddCollection();
                } else {
                  toggleSelect(index);
                }
              }}
              style={{ cursor: isAddCollection && !deleteMode ? 'pointer' : 'default' }}
            >
              <img src={item.image} alt={item.title} />
              
              {isAddCollection && !deleteMode && <span className="plus-icon">+</span>}
              <p>{item.title}</p>
              
              {deleteMode && !isAddCollection && index !== 0 && (
  <div className="archiveB-checkmark-overlay" style={{ fontSize: '20px', position: 'absolute', top: 8, right: 8}}>
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

export default ArchiveB;
