import React, { useState } from 'react';
import SubscribeHeader3 from '../../components/SubscribeHeader3';
import { Link } from 'react-router-dom';
import './SubscribeSelectDetail.css';
import card from '../../assets/img/SubscribeImg/membership_card.png';
import card2 from '../../assets/img/SubscribeImg/payment_done_icon.svg';

const SubscribeSelectDetail: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlePayment = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  };

  return (
    <div className='bgsub'>
      <div className="SubscribeHeader3">
        <SubscribeHeader3 />
      </div>

      <div className="container SubscribeSelectDetail">
        <div className="topSection">
          <img src={card} alt="membership card" />
          <h3 className="name">Illit</h3>
          <p className="smalltext">
            지금 공식 멤버십에 가입하시고 <br /> 특별한 멤버십 계획들을 누려보세요!
          </p>
        </div>

        <div className="bottomSection">
          <p className="subtitle">Subscription Benefits</p>
          <ul className="smalltext">
            <li>구독권 전용 ILLIT 공식 상품 구매 기회</li>
            <li>LOOPIN 내 ILLIT 독점 콘텐츠 시청 관련 혜택</li>
            <li>ILLIT 공연 시 선예매, 추첨제 참여 기회</li>
            <li>ILLIT LOOPIN 내 구독권 전용 독점 콘텐츠</li>
            <li>커뮤니티 내 특별한 혜택</li>
          </ul>
        </div>

        <div className="complete-btn">
          <button onClick={handlePayment}>₩ 9,900 결제하기</button>
        </div>
      </div>

      {/* 로딩 오버레이 */}
      {isLoading && (
        <div className="overlay">
          <div className="spinner" />
        </div>
      )}

      {/* 결제 완료 모달 */}
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <img src={card2} alt="완료" />
            <h3>찐팬 인증 완료! 🎉</h3>
            <p>이제 너만을 위한 세상이야 ✨</p>
            <Link to="/ArtistHome">
              <button className="go-btn">ILLIT 홈으로 가기 💜</button>
            </Link>
          </div>
          <Link to="/MainHome">
            <button className="close">닫기</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubscribeSelectDetail;
