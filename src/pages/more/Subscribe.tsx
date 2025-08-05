import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubscribeHeader from '../../components/SubscribeHeader';
import './Subscribe.css';
import ticket1 from '../../assets/img/SubscribeImg/Subscription1.png';
import ticket2 from '../../assets/img/SubscribeImg/Subscription2.png';
import down from '../../assets/img/SubscribeImg/down.png';

// 각 아코디언 항목의 타입 정의
interface InfoItem {
  title: string;
  content: JSX.Element;
}

const Subscribe: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const infoData: InfoItem[] = [
    {
      title: '이용안내',
      content: (
        <>
          <p>· 판매 가격은 상황에 따라 변경될 수 있습니다 </p>
          <p className="a">
            · LOOPIN 구독 시, 다음의 유료 콘텐츠를 이용할 수 있습니다.
            <p>- Calls : 라이브 방송 참여 및 채팅, VOD 시청</p>
            <p> - Photos : 사진 및 영상 열람</p>
            <p>- Calendar : 아티스트 멤버들의 개인 일정 열람 및 댓글 작성</p>
            <p>- Podcast : 에피소드 시청</p>
          </p>
          <p className="b">
            ※ 단, Messages는 별도 구독 상품입니다. (아티스트 그룹 내 각 아티스트
            별로 개별 과금)
          </p>
          <p>
            · 정기 구독 상품으로서, 구독 갱신일로부터 1개월 또는 1년간의 이용 요금이
            매 결제 주기마다 자동 결제됩니다.
          </p>
          <p>
            · 구독 시 아티스트 그룹을 복수 선택할 수 있으며, 선택한 그룹에 대한
            구독은 갱신일 기준 3일 전까지 해지할 수 있습니다.
          </p>
          <p>
            · LOOPIN 구독의 모든 혜택은 구독 기간 중에만 제공되며, 구독 기간 만료 시
            유료 콘텐츠 및 기능을 이용할 수 없습니다.
          </p>
          <p>
            · 유료 콘텐츠는 비정기적으로 업로드되며, 구독 기간 내 콘텐츠 제공 횟수는
            보장되지 않습니다. (콘텐츠 미업로드를 사유로 한 환불은 불가합니다.)
          </p>
        </>
      ),
    },
    {
      title: '결제 유의사항',
      content: (
        <>
          <p>- 자동결제 관련 안내</p>
          <p>- 카드 변경 및 결제 실패 시 대처 방법</p>
        </>
      ),
    },
    {
      title: '해지 · 환불 안내',
      content: (
        <>
          <p>- 해지 시 남은 기간 사용 여부</p>
          <p>- 환불 처리 기준 및 유의사항</p>
        </>
      ),
    },
  ];

  return (
    <div className="bgSub">
      <div className="SubscribeHeader">
        <SubscribeHeader />
      </div>
      <div className="container sub">
        <div className="topBox">
          <div className="ticket month">
            <Link to="/SubscribeSelect">
              <img src={ticket1} alt="월간 구독권" />
              <div className="ontext">
                <p className="name">월간 구독권</p>
                <p className="price">
                  ₩ 9,900 <span>/ 매월</span>
                </p>
                <p className="smalltext">· 아티스트와의 채팅/라이브</p>
                <p className="smalltext">· 아티스트와의 사진/영상/일정/팟캐스트</p>
              </div>
              <p className="subs">subscription</p>
              <p className="subs">subscription</p><span className="red-dot"></span>
            </Link>
          </div>

          <div className="ticket yearly">
            <img src={ticket2} alt="연간 구독권" />
            <div className="ontext">
              <p className="name">연간 구독권</p>
              <p className="price">
                ₩ 99,000 <span>/ 매년</span>
              </p>
              <p className="smalltext">· 아티스트와의 채팅/라이브</p>
              <p className="smalltext">· 아티스트와의 사진/영상/일정/팟캐스트</p>
            </div>
            <p className="subs">subscription</p>
          </div>
        </div>

        <div className="infoBox">
          <ul>
            {infoData.map((item, index) => (
              <li className="btn" key={index}> 
                <div className="accordion-header" onClick={() => toggleItem(index)}>
                  <span>{item.title}</span>
                  <img
                    src={down}
                    alt="arrow"
                    className={openIndex === index ? 'rotate' : ''}
                  /><span className="red-dot"></span>
                </div>
                {openIndex === index && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
