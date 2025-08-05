import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MyArchiveHeader from '../../components/MyArchiveHeader';
import './MyArchive.css';

const MyArchive = () => {
  const location = useLocation();

  // 삭제 모드 상태, 선택된 항목 인덱스 배열 상태
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  // iOS 자동 링크 스타일 제거
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getIndex = () => {
    if (location.pathname.includes('ArchiveA')) return 0;
    if (location.pathname.includes('ArchiveB')) return 1;
    if (location.pathname.includes('ArchiveC')) return 2;
    if (location.pathname.includes('ArchiveD')) return 3;
    return 0;
  };

  // 삭제 모드 진입 함수
  const handleDeleteMode = () => {
    setDeleteMode(true);
    setSelectedIndexes([]); // 선택 초기화
  };

  // 수정 모드 진입 함수 (필요시 구현)
  const handleEditMode = () => {
    // 예: 수정 모드 토글 등 구현
    alert('수정 모드 진입 (구현 필요)');
  };

  return (
    <div className="bgArchive">
      <div className="ArchiveFixHeader">
        <div className="MyArchiveHeader">
          {/* 상태 제어 함수 props로 전달 */}
          <MyArchiveHeader 
            onDeleteMode={handleDeleteMode} 
            onEditMode={handleEditMode} 
          />
        </div>

        <div className="toggle-container">
          <div
            className="toggle-bg"
            style={{
              left: `calc(${getIndex() * 25}% - 1px)`,
              width: 'calc(25% + 2px)',
            }}
          />
          <Link to="ArchiveA" className={`toggle-btn ${getIndex() === 0 ? 'active' : ''}`}>좋아요</Link>
          <Link to="ArchiveB" className={`toggle-btn ${getIndex() === 1 ? 'active' : ''}`}>북마크</Link>
          <Link to="ArchiveC" className={`toggle-btn ${getIndex() === 2 ? 'active' : ''}`}>나의 글</Link>
          <Link to="ArchiveD" className={`toggle-btn ${getIndex() === 3 ? 'active' : ''}`}>댓글</Link>
        </div>
      </div>
      <div className="container archive">
        {/* Outlet에 context로 상태 전달 */}
        <Outlet context={{ deleteMode, setDeleteMode, selectedIndexes, setSelectedIndexes }} />
      </div>
    </div>
  );
};

export default MyArchive;
