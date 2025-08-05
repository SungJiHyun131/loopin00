import React, { useState } from 'react';
import './ChatbotView.css';
import close from '../assets/img/header_close.png';
import back from '../assets/img/header_back.png';
import profile from '../assets/img/chatbot-profile.png';
import notice from '../assets/img/noticeicon.png';
import { useLocation, useNavigate } from 'react-router-dom';

interface Message {
  type: 'bot' | 'user' | 'buttons';
  text?: string;
  custom?: boolean;
  content?: JSX.Element;
  side?: 'user' | 'bot';
  options?: string[];
}

const ChatbotView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/MainHome';

  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: '안녕하세요 LOOPIN입니다 💙' },
    {
      type: 'buttons',
      side: 'user',
      options: [
        '⭐ New ⭐',
        '멤버십 혜택 안내 🎉',
        '고객센터 운영 시간 📞',
        '주문 (전) 문의 🔍',
        '주문 (후) 문의 🔎',
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isAgentConnected, setIsAgentConnected] = useState(false);

  const handleSelect = (type: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { type: 'user', text: type }]);

    setTimeout(() => {
      let response: string | { custom: true; content: JSX.Element };

      if (type === '⭐ New ⭐') {
        response = '최신 앨범과 굿즈 소식을 LOOPIN에서 가장 먼저 확인해보세요 🎁';
      } else if (type === '멤버십 혜택 안내 🎉') {
        response = {
          custom: true,
          content: (
            <>
              <p>
                LOOPIN 멤버십 회원이 되면
                <br />
                온라인 공식몰에서
                <br />
                다양한 혜택을 받을 수 있습니다
              </p>
              <p style={{ marginTop: '8px' }}>
                아래 링크를 통해
                <br />
                자세하게 확인 해보세요 👋🏻
              </p>
              <button className="chatbot-body__link-btn">멤버십 혜택 안내 🎉</button>
              <div className="chatbot-body__bottom-btns">
                {!isAgentConnected && (
                  <button onClick={handleAgentConnect}>채팅 상담원 연결</button>
                )}
                {!isAgentConnected && (
                  <button onClick={() => showButtonsAgain('user')}>이전 단계</button>
                )}
              </div>
            </>
          ),
        };
      } else if (type === '고객센터 운영 시간 📞') {
        response = '운영시간은 평일 오전 10시 ~ 오후 6시이며, 점심시간은 12~1시입니다.';
      } else if (type === '주문 (전) 문의 🔍') {
        response = '상품 정보, 재고, 결제 방법 등에 대해 알려드릴게요!';
      } else if (type === '주문 (후) 문의 🔎') {
        response = '배송 상태, 교환/환불 절차를 도와드릴게요.';
      } else {
        response = '죄송합니다. 해당 항목에 대한 정보를 찾을 수 없습니다.';
      }

      if (typeof response === 'string') {
        setMessages((prev) => [...prev, { type: 'bot', text: response }]);
        if (!isAgentConnected) showButtonsAgain('user');
      } else {
        setMessages((prev) => [...prev, { type: 'bot', custom: true, content: response.content }]);
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleAgentConnect = () => {
    setMessages((prev) => [...prev, { type: 'bot', text: '상담원 연결 중입니다...' }]);
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: '상담원이 연결되었습니다!' },
      ]);
      setIsLoading(false);
      setIsAgentConnected(true);
    }, 1500);
  };

  const showButtonsAgain = (side: 'user' | 'bot' = 'bot') => {
    if (isAgentConnected) return;

    setMessages((prev) => [
      ...prev,
      {
        type: 'buttons',
        side,
        options: [
          '⭐ New ⭐',
          '멤버십 혜택 안내 🎉',
          '고객센터 운영 시간 📞',
          '주문 (전) 문의 🔍',
          '주문 (후) 문의 🔎',
        ],
      },
    ]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: 'user', text: inputText.trim() },
      {
        type: 'bot',
        text:
          '상담원 연결을 원하신다면, 운영 시간 내에 문의해 주세요 😊\n(평일 10시~18시, 점심시간 12~13시)',
      },
    ]);
    setInputText('');
  };

  return (
    <div className="chatbot-body">
      <div className="topNotice">
        <img src={notice} alt="notice icon" style={{ width: 14 }} />
        <p className="topNotice-text">
          설레는 마음이 흐르는 공간, <br />
          LOOPIN이 그 순간을 함께합니다 ✨
        </p>
      </div>

      <div className="chatbot-body__header">
        <button onClick={() => navigate(from)}>
          <img src={back} alt="back" />
        </button>
        <div className="chatbot-body__profile">
          <p className="chatbot-body__title">LOOPIN</p>
          <span className="chatbot-body__subtitle">몇 분 내 답변 받으실 수 있어요</span>
        </div>
        <button onClick={() => navigate('/MainHome')}>
          <img src={close} alt="close" />
          <span className="red-dot"></span>
        </button>
      </div>

      <div className="chatbot-body__chatbox">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chatbot-body__message ${
              msg.type === 'user' || msg.side === 'user' ? 'user' : 'bot'
            }`}
          >
            {msg.type !== 'user' && msg.type !== 'buttons' && (
              <img src={profile} alt="bot" className="chatbot-body__avatar" />
            )}

            {msg.type === 'buttons' ? (
              <div className={`chatbot-body__buttons ${msg.side === 'user' ? 'user' : 'bot'}`}>
                <span className="red-dot"></span>
                {msg.options?.map((opt, i) => (
                  <button key={i} onClick={() => handleSelect(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="chatbot-body__bubble">
                {msg.custom
                  ? msg.content
                  : msg.text?.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="chatbot-body__message bot">
            <img src={profile} alt="bot" className="chatbot-body__avatar" />
            <div className="chatbot-body__bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
      </div>

      <div className="chatbot-body__input-bar">
        <input
          type="text"
          placeholder="AI 에이전트에게 질문해 주세요."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <button
          className={inputText.trim() ? 'active' : ''}
          onClick={handleSendMessage}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatbotView;
