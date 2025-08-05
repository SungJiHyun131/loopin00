import React from 'react';
import './Alarm.css';
import AlarmHeader from '../components/AlarmHeader';
import NotificationCard from '../components/NotificationCard';
import imgMj from '../assets/img/moreImg/minjupr.png';
import imgYn from '../assets/img/moreImg/yoonapr.png';
import imgWh from '../assets/img/moreImg/wonheepr.png';
import imgMk from '../assets/img/moreImg/mokapr.png';
import imgIh from '../assets/img/moreImg/ilohapr.png';
import mainbg from '../assets/img/mainheaderbg.png';

type Notification = {
  userImg: string;
  name: string;
  message: string;
  time: string;
};

const todayNotifications: Notification[] = [
  { userImg: imgMj, name: '민주', message: '민주님이 게시물을 올렸습니다.', time: '3분 전' },
  { userImg: imgMj, name: '민주', message: '민주님이 댓글을 달았습니다.', time: '25분 전' },
  { userImg: imgIh, name: '이로하', message: '이로하님이 게시물을 올렸습니다.', time: '34분 전' },
];

const yesterdayNotifications: Notification[] = [
  { userImg: imgYn, name: '윤아', message: '윤아님이 게시물을 올렸습니다.', time: '1일 전' },
  { userImg: imgWh, name: '원희', message: '원희님이 게시물을 올렸습니다.', time: '1일 전' },
];

const recentNotifications: Notification[] = [
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '2일 전' },
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '3일 전' },
  { userImg: imgWh, name: '원희', message: '원희님이 게시물을 올렸습니다.', time: '3일 전' },
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '5일 전' },
];

const Alarm: React.FC = () => {
  return (
    <div className="alarmhome">
      <div className="alarmbg">
        <img src={mainbg} alt="" />
      </div>
      <div className="AlarmHeader">
        <AlarmHeader />
      </div>
      <div className="container Alarm">
        <div className="inner">
          <p className="subtitle">Today</p>
          <div className="today-notifications">
            {todayNotifications.map((item, idx) => (
              <NotificationCard key={idx} {...item} />
            ))}
          </div>

          <p className="subtitle">Yesterday</p>
          {yesterdayNotifications.map((item, idx) => (
            <NotificationCard key={idx} {...item} />
          ))}

          <p className="subtitle">최근 30일</p>
          {recentNotifications.map((item, idx) => (
            <NotificationCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alarm;
