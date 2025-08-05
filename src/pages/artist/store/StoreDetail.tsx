import React from 'react';
import StoreHeader2 from '../../../components/StoreHeader2';
import './StoreDetail.css';

import img1 from '../../../assets/img/StoreImg/Detail/img1.png';
import heart from '../../../assets/img/StoreImg/Detail/icon_heart.png';
import share from '../../../assets/img/StoreImg/Detail/icon_share.png';
import warning from '../../../assets/img/StoreImg/Detail/icon_warning.png';
import warning2 from '../../../assets/img/StoreImg/Detail/icon_warning2.png';

import img2 from '../../../assets/img/StoreImg/Detail/img2.png';
import title from '../../../assets/img/StoreImg/Detail/GlitterDay.png';

import Detail1 from '../../../assets/img/StoreImg/Detail/Detail1.png';
import Detail2 from '../../../assets/img/StoreImg/Detail/Detail2.png';
import ex1 from '../../../assets/img/StoreImg/Detail/ex1.png';
import ex2 from '../../../assets/img/StoreImg/Detail/ex2.png';
import front from '../../../assets/img/StoreImg/Detail/front1.png';
import back from '../../../assets/img/StoreImg/Detail/back1.png';
import storebg from '../../../assets/img/StoreImg/Detail/storebg.png';
import storehd from '../../../assets/img/StoreImg/storehd.png';

const StoreDetail: React.FC = () => {
  const handleAddToCart = () => {
    // 장바구니 담기 로직 추가 가능
    console.log("장바구니에 담기 클릭");
  };

  return (
    <div>
      <div className="storebg"><img src={storebg} alt="Store Background" /></div>
      <div className="storehd"><img src={storehd} alt="Store Header" /></div>
      <div className="StoreHeader2">
        <StoreHeader2 />
      </div>
      <div className="container StoreDetail">

        <div className="TopBox">
          <img src={img1} alt="Product Image" className='img1' />
          <div className="ProductInfo">
            <div className="top">
              <p className="name">KEYRING</p>
              <div className="icon">
                <img src={heart} alt="Like Icon" />
                <img src={share} alt="Share Icon" />
              </div>
            </div>
            <div className="tag">
              <p className="blue">단독판매</p>
              <p className="KR발송">KR 발송</p>
            </div>
            <h3 className="price">₩20,000</h3>
          </div>
          <div className="Warnline">
            <div className="Warn1">
              <p className='tit'><img src={warning} alt="Warning Icon" /> 판매공지</p>
              <p className='txt'>최대 구매 수량은 3개 입니다.</p>
            </div>
          </div>
        </div>

        <div className="MiddleBox">
          <p className='title'><img src={title} alt="Glitter Day Title" /></p>
          <p className='img2'><img src={img2} alt="Product Detail Image" /></p>

          <div className="textBox">
            <p className="bold">
              2025 ILLIT GLITTER DAY IN SEOUL<br />
              콘셉트를 담은 키링입니다.
            </p>
            <p className="light">
              This is a Keyring<br />
              featuring the 2025 ILLIT GLITTER DAY IN SEOUL concept
            </p>
          </div>

          <p className="Detail1"><img src={Detail1} alt="Detail Image 1" /></p>

          <div className="textBox">
            <p className="bold">
              메탈소재의 키링으로,<br />
              볼륨감과 무게감이 있는 구름 모양의 메인참에<br />
              GLITTER DAY 로고가 각인되어 있습니다.
            </p>
            <p className="light">
              The metal keyring features a voluminous,<br />
              heavy cloud-shaped main charm<br />
              with the GLITTER DAY logo engraved on it.
            </p>
          </div>

          <p className="Detail2"><img src={Detail2} alt="Detail Image 2" /></p>

          <div className="textBox">
            <p className="bold">
              팬미팅 콘셉트에 맞춘 하늘색 컬러의 별모양 서브 참은<br />
              아일릿 로고가 각인된 미니참과 함께 연결되어 있습니다.
            </p>
            <p className="light">
              The star-shaped sub-charm in light blue matches<br />
              the fanmeeting’s concept, and is connected<br />
              to the mini charm engraved with the ILLIT logo.
            </p>
          </div>

          <div className="ex">
            <img src={ex1} alt="Example 1" className='ex1' />
            <img src={ex2} alt="Example 2" className='ex2' />
          </div>

          <div className="textBox">
            <p className="bold">가방에 달거나 오브제로도 활용해 보세요.</p>
            <p className="light">Try using it as a bag charm or decorative object.</p>
          </div>

          <div className="final">
            <div className="front">
              <img src={front} alt="Front view" />
              <p>front</p>
            </div>
            <div className="back">
              <img src={back} alt="Back view" />
              <p>back</p>
            </div>
          </div>
        </div>

      </div>

      <div className="BottomBox">
        <p className='tit'><img src={warning2} alt="Notice Icon" /> 안내</p>
        <div className='txt'>
          <h3 className="kor">
            화면 해상도, 컬러 설정에 따라 제품이 왜곡되거나<br />
            컬러가 다르게 보일 수 있습니다.
          </h3>
          <p className="eng">
            The actual product may slightly vary in appearance or color due to your monitor resolution or color settings.
          </p>
        </div>
        <div className='txt'>
          <h3 className="kor">
            사이즈 실측의 경우 제품의 특성 및 측정 방식에 따라<br />
            오차가 발생할 수 있습니다.
          </h3>
          <p className="eng">
            There may be slight discrepancies in size based on measurement methods used and the nature of the product.
          </p>
        </div>
        <div className='txt'>
          <h3 className="kor">
            제조 과정 시 마무리 작업 단계에서 발생하는<br />
            미세한 스크래치는 불량이 아닙니다.
          </h3>
          <p className="eng">
            Minuscule scratches that occur during the finishing procedure of production are not defects.
          </p>
        </div>
      </div>

      <div className="BTN">
        <a>장바구니에 담기</a>
      </div>
    </div>
  );
};

export default StoreDetail;
