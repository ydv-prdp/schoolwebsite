import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import styled from 'styled-components';

function ImageSlider(props) {
  const a = props.imgArr;
  console.log(a[0]);
    return (
        <Wrapper>
        <Swiper
         spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {a[0].imgArr.map((e)=><SwiperSlide key={e.id}><img src={e.imgSrc} alt="school"/></SwiperSlide>)}
        
        </Swiper>
        <div className='text'>HOLY KRISHNA'S COLLEGE</div>
        </Wrapper>
      );
}
const Wrapper = styled.section`
    padding:0 0rem;
    position:relative;
    img{
        width:100%;
        height:100vh;
        transition:all 1s ease;
    }    
    img:hover{
      transform:scale(1.1);
    }
    .text{
      position:absolute;
      font-size:6rem;
      z-index:100;
      top:10vh;
      left:30%;
      background-color:black;
      color:white;
      display:none;
    }
`;
export default ImageSlider