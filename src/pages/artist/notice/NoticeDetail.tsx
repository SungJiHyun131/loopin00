import React from 'react';
import NoticeHeader2 from '../../../components/NoticeHeader2';
import './NoticeDetail.css';
import bgbottom from '../../../assets/img/bg-bottom.png';
import bgtop from '../../../assets/img/IllitHomeimg/postimg/bgt.png';

const NoticeDetail: React.FC = () => {
  return (
    <div className="NoticeDetailMain">
      <div className="bg-top"><img src={bgtop} alt="" /></div>
      <div className="NoticeHeader2">
        <NoticeHeader2 />
      </div>
      <div className="container NoticeDetail">
        <div className="top">
          <p className="pink">[EVENT] </p>
          <h3 className="Notice_tit">최애가 말아주는 여름 콘텐츠?! 😳🏖️ </h3>
          <p>2025.07.04</p>
        </div>
        <div className="bottom">
          <p className="txt">
            안녕하세요 LOOPIN이에요. (*˙˘˙)♡
            <br /><br />
            이번 주 신규 오픈 미션 배달 왔습니다 💌
            <br />
            따끈따끈한 미션 지금 바로 확인해보세요!
            <br /><br />
            <span className="Notice">최애가 찍어줬으면 하는 여름 콘텐츠는? 🏖️</span>
            <br />
            날씨는 덥지만, 최애가 말아주는 여름콘텐츠?
            <br />
            ㄴ 오히려 좋아 😙
            <br />
            여러분의 픽을 골라주세요!
            <br /><br />
            <span className="Notice">콘서트에서 가장 기대되는 순간은? 🔥</span>
            <br />
            콘서트의 모든 순간이 행복하지만
            <br />
            여러분을 더욱 행복하게 만드는 그 순간은 언제인가요?
            <br />
            여러분의 최애 순간을 공유해주세요! 😉
            <br /><br />
            감사합니다 🙏🏻
            <br />
            케이팝 No.1 앱, LOPPIN
            <br /><br />
            ‘당신이 사랑하는 것을 더욱 사랑하도록
            <br />
            Love What You Love More’
          </p>
          <div className="btn"><p>새로운 미션 참여하기 🚀</p></div>
        </div>
      </div>
      <div className="bg-bottom"><img src={bgbottom} alt="" /></div>
    </div>
  );
};

export default NoticeDetail;
