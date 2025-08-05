import React from 'react';
import LiveDetailHeader from '../../../components/LiveDetailHeader';

const LiveDetail: React.FC = () => {
  return (
    <div>
      <div className="LiveDetailHeader">
        <LiveDetailHeader />
      </div>
      <div className="container LiveDetail">
        라이브입니다.
      </div>
    </div>
  );
};

export default LiveDetail;
