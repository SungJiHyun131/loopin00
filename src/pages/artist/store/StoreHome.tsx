import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import storehd from '../../../assets/img/StoreImg/storehd.png';
import StoreHeader from '../../../components/StoreHeader';
import LikeButton from '../../../components/LikeButton';
import Footer2 from '../../../components/Footer2';
import storebg from '../../../assets/img/StoreImg/Detail/storebg.png';
import banner1 from '../../../assets/img/StoreImg/banner1.png';
import banner2 from '../../../assets/img/StoreImg/banner2.png';
import banner3 from '../../../assets/img/StoreImg/banner3.png';
import banner4 from '../../../assets/img/StoreImg/banner4.png';

import goods1 from '../../../assets/img/StoreImg/product1.png';
import goods2 from '../../../assets/img/StoreImg/product2.png'
import goods3 from '../../../assets/img/StoreImg/product3.png'
import goods4 from '../../../assets/img/StoreImg/product4.png'
import goods5 from '../../../assets/img/StoreImg/product5.png'
import goods6 from '../../../assets/img/StoreImg/product6.png'
import goods7 from '../../../assets/img/StoreImg/product7.png'
import goods8 from '../../../assets/img/StoreImg/product8.png'
import goods9 from '../../../assets/img/StoreImg/product9.png'
import goods10 from '../../../assets/img/StoreImg/product10.png'
import goods11 from '../../../assets/img/StoreImg/product11.png'
import goods12 from '../../../assets/img/StoreImg/product12.png'
import goods13 from '../../../assets/img/StoreImg/product13.png'
import goods14 from '../../../assets/img/StoreImg/product14.png'
import goods15 from '../../../assets/img/StoreImg/product15.png'
import goods16 from '../../../assets/img/StoreImg/product16.png'


import goods17 from '../../../assets/img/StoreImg/productM1.png'
import goods18 from '../../../assets/img/StoreImg/productM2.png'
import goods19 from '../../../assets/img/StoreImg/productM3.png'
import goods20 from '../../../assets/img/StoreImg/productM4.png'
import goods21 from '../../../assets/img/StoreImg/productM5.png'
import goods22 from '../../../assets/img/StoreImg/productM6.png'
import goods23 from '../../../assets/img/StoreImg/productM7.png'
import goods24 from '../../../assets/img/StoreImg/productM8.png'
import goods25 from '../../../assets/img/StoreImg/productM9.png'
import goods26 from '../../../assets/img/StoreImg/productM10.png'
import goods27 from '../../../assets/img/StoreImg/productM11.png'
import goods28 from '../../../assets/img/StoreImg/productM12.png'
import goods29 from '../../../assets/img/StoreImg/productM13.png'
import goods30 from '../../../assets/img/StoreImg/productM14.png'

import goods31 from '../../../assets/img/StoreImg/album1.png'
import goods32 from '../../../assets/img/StoreImg/album2.png'
import goods33 from '../../../assets/img/StoreImg/album3.png'
import goods34 from '../../../assets/img/StoreImg/album4.png'
import goods35 from '../../../assets/img/StoreImg/album5.png'
import goods36 from '../../../assets/img/StoreImg/album6.png'
import goods37 from '../../../assets/img/StoreImg/album7.png'
import goods38 from '../../../assets/img/StoreImg/album8.png'
import goods39 from '../../../assets/img/StoreImg/album9.png'
import goods40 from '../../../assets/img/StoreImg/album10.png'
import goods41 from '../../../assets/img/StoreImg/album11.png'


import goods42 from '../../../assets/img/StoreImg/magazine1.png'
import goods43 from '../../../assets/img/StoreImg/magazine2.png'
import goods44 from '../../../assets/img/StoreImg/magazine3.png'
import goods45 from '../../../assets/img/StoreImg/magazine4.png'
import goods46 from '../../../assets/img/StoreImg/magazine5.png'
import goods47 from '../../../assets/img/StoreImg/magazine6.png'
import goods48 from '../../../assets/img/StoreImg/magazine7.png'

import goods49 from '../../../assets/img/StoreImg/gllit.png'
import goods50 from '../../../assets/img/StoreImg/gllit(2).png'

import './StoreHome.css';

const bigCategories = ["MERCH", "TOUR MERCH", "ALBUM", "MAGAZINE", "GLOBAL MEMBERSHIP", "JAPAN MEMBERSHIP"];

const smallCategories: Record<string, string[]> = {
  "MERCH": ["ALL", "bomb", "Official Merch", "I'LL LIKE YOU", "SUPER REAL ME"],
  "TOUR MERCH": ["ALL", "2025 ILLIT GLITTER DAY IN SEOUL"],
  "ALBUM": ["ALL", "bomb"],
  "MAGAZINE": ["ALL", "VOGUE"],
  "GLOBAL MEMBERSHIP": ["ALL", "MEMBERSHIP", "GIFT"],
  "JAPAN MEMBERSHIP": ["ALL", "MEMBERSHIP"],
};

interface Product {
  id: number;
  name: string;
  img: string;
  bigCategory: string;
  smallCategory: string;
  price: string;
  soldOut?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Invitation Set",
    img: goods1,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "14,000",
  }, 
  {
    id: 2,
    name: "Image Picket",
    img: goods2,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "10,000",
  },
  {
    id: 3,
    name: "Lucky Draw",
    img: goods3,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "9,000",
  },
  {
    id: 4,
    name: "ID Card Set",
    img: goods4,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "7,000",
  },
  {
    id: 5,
    name: "Keyring",
    img: goods5, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "20,000",
  },
  {
    id: 6,
    name: "Mini Photo Holder",
    img: goods6,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "13,000",
  },
  {
    id: 7,
    name: "Sticker Set",
    img: goods7, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "15,000",
  },
  {
    id: 8,
    name: "DIY Beads Keyring Set",
    img: goods8,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "59,400",
  },
  {
    id: 9,
    name: "Tumbler",
    img: goods9, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "35,000",
  },
  {
    id: 10,
    name: "Cubic Crop T-Shirt",
    img: goods10,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "59,000",
  },
  {
    id: 11,
    name: "S/S T-shirt",
    img: goods11, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "59,400",
  },
  {
    id: 12,
    name: "String Bag",
    img: goods12,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "52,000",
  },
  {
    id: 13,
    name: "Ball Cap",
    img: goods13, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "42,000",
  },
  {
    id: 14,
    name: "Slogan",
    img: goods14,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "20,000",
  },
  {
    id: 15,
    name: "Shopper Bag",
    img: goods15, 
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "6,000",
  },
  {
    id: 16,
    name: "Trading Card",
    img: goods16,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "8,000",
    soldOut: true,
  },


  {
    id: 17,
    name: "KEYRING",
    img: goods5,
    bigCategory: "MERCH",
    smallCategory: "bomb",
    price: "20,000",
  },
  {
    id: 18,
    name: "S/S T-Shirt",
    img: goods18,
    bigCategory: "MERCH",
    smallCategory: "bomb",
    price: "45,000",
  },
    {
    id: 19,
    name: "Can Badge",
    img: goods19,
    bigCategory: "MERCH",
    smallCategory: "bomb",
    price: "5,000",
  },
  {
    id: 20,
    name: "Lucky Draw",
    img: goods20,
    bigCategory: "MERCH",
    smallCategory: "bomb",
    price: "10,000",
  },
    {
    id: 21,
    name: "Lenticular Photo Set",
    img: goods21,
    bigCategory: "MERCH",
    smallCategory: "Official Merch",
    price: "25,000",
  },
  {
    id: 22,
    name: "Printed Photo Set",
    img: goods22,
    bigCategory: "MERCH",
    smallCategory: "SUPER REAL ME",
    price: "10,000",
  },
  {
    id: 23,
    name: "Photo Set",
    img: goods23,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "24,000",
  },
  {
    id: 24,
    name: "Disposable Camera",
    img: goods24,
    bigCategory: "MERCH",
    smallCategory: "SUPER REAL ME",
    price: "45,000",
  },
      {
    id: 25,
    name: "Film Keyring",
    img: goods25,
    bigCategory: "MERCH",
    smallCategory: "I'LL LIKE YOU",
    price: "19,000",
  },
  {
    id: 26,
    name: "Keyring",
    img: goods26,
    bigCategory: "MERCH",
    smallCategory: "I'LL LIKE YOU",
    price: "18,000",
  },
  {
    id: 27,
    name: "Eco Bag",
    img: goods27,
    bigCategory: "MERCH",
    smallCategory: "I'LL LIKE YOU",
    price: "35,000",
  },
  {
    id: 28,
    name: "Photo Deco Set",
    img: goods28,
    bigCategory: "MERCH",
    smallCategory: "SUPER REAL ME",
    price: "24,000",
  },
    {
    id: 29,
    name: "Official Light Stick",
    img: goods29,
    bigCategory: "MERCH",
    smallCategory: "Official Merch",
    price: "49,000",
  },
  {
    id: 30,
    name: "CARD COVER STICKER",
    img: goods30,
    bigCategory: "MERCH",
    smallCategory: "I'LL LIKE YOU",
    price: "6,000",
  },



  {
    id: 31,
    name: "3rd Mini Album 'bomb'(Set)",
    img: goods31,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "59,400",
  },
  {
    id: 32,
    name: "3rd Mini Album 'bomb'(Random)",
    img: goods32,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "19,800",
  },
  {
    id: 33,
    name: "3rd Mini Album 'bomb' (GLLIT ver.)(Set)",
    img: goods33,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "77,500",
  },
  {
    id: 34,
    name: "3rd Mini Album 'bomb'(Random)",
    img: goods34,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "15,500",
  },
    {
    id: 35,
    name: "3rd Mini Album 'bomb'(Set)",
    img: goods35,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "59,400",
  },
  {
    id: 36,
    name: "3rd Mini Album 'bomb'(Random)",
    img: goods36,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "19,800",
  },
  {
    id: 37,
    name: "3rd Mini Album 'bomb' (GLLIT ver.)(Set)",
    img: goods37,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "77,500",
  },
  {
    id: 38,
    name: "3rd Mini Album 'bomb'(Random)",
    img: goods38,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "15,500",
  },
      {
    id: 39,
    name: "3rd Mini Album 'bomb'(Set)",
    img: goods39,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "59,400",
  },
  {
    id: 40,
    name: "3rd Mini Album 'bomb'(Random)",
    img: goods40,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "19,800",
  },
  {
    id: 41,
    name: "3rd Mini Album 'bomb' (GLLIT ver.)(Set)",
    img: goods41,
    bigCategory: "ALBUM",
    smallCategory: "bomb",
    price: "77,500",
  },
  {
    id: 42,
    name: "VOGUE ILLIT SPECIAL (2025.06 / A type)",
    img: goods42,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 43,
    name: "VOGUE ILLIT SPECIAL (2025.06 / B type)",
    img: goods43,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 44,
    name: "VOGUE ILLIT SPECIAL (2025.06 / C type)",
    img: goods44,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 45,
    name: "VOGUE ILLIT SPECIAL (2025.06 / D type)",
    img: goods45,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 46,
    name: "VOGUE ILLIT SPECIAL (2025.06 / E type)",
    img: goods46,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 47,
    name: "VOGUE ILLIT SPECIAL (2025.06 / F type)",
    img: goods47,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },
  {
    id: 48,
    name: "VOGUE ILLIT SPECIAL (2025.06 / G type)",
    img: goods48,
    bigCategory: "MAGAZINE",
    smallCategory: "VOGUE",
    price: "10,000",
    soldOut: true,
  },

  {
    id: 49,
    name: "GLLIT MEMBERSHIP",
    img: goods49,
    bigCategory: "GLOBAL MEMBERSHIP",
    smallCategory: "MEMBERSHIP",
    price: "25,000",
  },
  {
    id: 50,
    name: "VOGUE ILLIT SPECIAL (2025.06 / B type)",
    img: goods50,
    bigCategory: "GLOBAL MEMBERSHIP",
    smallCategory: "GIFT",
    price: "0",
  },

    {
    id: 51,
    name: "GLLIT MEMBERSHIP(JP)",
    img: goods49,
    bigCategory: "JAPAN MEMBERSHIP",
    smallCategory: "MEMBERSHIP",
    price: "56,550",
  },

];

const StoreHome: React.FC = () => {
  const location = useLocation();

  const [activeBigCategory, setActiveBigCategory] = useState<number>(0);
  const [activeSmallCategory, setActiveSmallCategory] = useState<string[]>(["ALL"]);

  const onBigCategoryClick = (index: number) => {
    setActiveBigCategory(index);
    setActiveSmallCategory(["ALL"]);
  };

  const handleSmallCategoryClick = (category: string) => {
    setActiveSmallCategory([category]);
  };

  const currentSmallCategories = smallCategories[bigCategories[activeBigCategory]] || [];

  const filteredProducts = products.filter((product) => {
    const matchBig = product.bigCategory === bigCategories[activeBigCategory];
    const selectedSmall = activeSmallCategory[0];
    const matchSmall = selectedSmall === "ALL"
      ? true
      : product.smallCategory === selectedSmall || product.smallCategory === "ALL";
    return matchBig && matchSmall;
  });

  return (
    <div>
      <div className="storebg"><img src={storebg} alt="store background" /></div>
      <div className="storehd"><img src={storehd} alt="store header" /></div>
      <div className="StoreHeader">
        <StoreHeader />
      </div>
      <div className="container StoreHome">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {[banner1, banner2, banner3, banner4].map((banner, i) => (
            <SwiperSlide key={i}>
              <div className="banner">
                <img src={banner} alt={`banner${i + 1}`} />
                <div className={i % 2 === 0 ? "textBox" : "textBox2"}>
                  {/* 배너 텍스트를 조건문 혹은 배열로 관리 가능 */}
                  {i === 0 && <>
                    <h3>ILLIT OFFICIAL LIGHT STICK</h3>
                    <p>공식 상품을 만나보세요</p>
                  </>}
                  {i === 1 && <>
                    <h3>GLLIT MEMBERSHIP OPEN!</h3>
                    <p>ILLIT과 더 가까워지는 방법</p>
                  </>}
                  {i === 2 && <>
                    <h3>GLLIT WELCOME GIFT</h3>
                    <p>오직 루핀스토어에서만 만날 수 있어요!</p>
                  </>}
                  {i === 3 && <>
                    <h3>2025 ILLIT GLITTER DAY IN SEOUL</h3>
                    <p>공식 상품을 만나보세요!</p>
                  </>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="Products">
          <h3>Products</h3>

          <div className="Big">
            <ul>
              {bigCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeBigCategory === index ? "underline" : ""}
                  onClick={() => onBigCategoryClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="Small">
            <ul>
              {currentSmallCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeSmallCategory.includes(item) ? "active" : ""}
                  onClick={() => handleSmallCategoryClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="Goods">
            <ul className="product-list">
            {filteredProducts.map((product) => (
  <li key={product.id}>
    <div className="goods">
      <Link to='/StoreDetail'>
        <div className="img-container" style={{ position: 'relative' }}>
        {product.id === 17 && (
            <div className="red-dot"></div>  
          )} 
          <img src={product.img} alt={product.name} />
          {product.soldOut && <div className="soldout-overlay">SOLD<br />OUT</div>}
       
        </div>
      </Link>
      <div className="explain">
        <p className="name">{product.name}</p>
        <div className="tag">
          <p className="blue">단독판매</p>
          <p className="KR발송">KR 발송</p>
        </div>
        <div className="price">
          <h3>₩{Number(product.price.replace(/,/g, '')).toLocaleString()}</h3>
          <LikeButton />
        </div>
      </div>
    </div>
  </li>
))}
            </ul>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default StoreHome;
