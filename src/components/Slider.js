import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Pagination} from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import clothes from '../images/clothes.jpg';
import furniture from '../images/furniture.jpg';
import furniture2 from '../images/furniture2.jpg';
import hedphone from '../images/hedphone.jpg';
import keyboard from '../images/keyboard.jpg';
import shoes from '../images/shoes.jpg';
import '../assets/slider.css'

const Slider = () => {
  return (
    <Swiper modules={[Autoplay,Pagination]} autoplay={{delay:1000}} pagination={{ clickable: true }}>
        <SwiperSlide>
            <img src={clothes} alt="clothes" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={furniture2} alt="furniture" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={hedphone} alt="hedphone" />
        </SwiperSlide>
         <SwiperSlide>
            <img src={furniture} alt="furniture" />
        </SwiperSlide>
         <SwiperSlide>
            <img src={shoes} alt="shoes" />
        </SwiperSlide>
         <SwiperSlide>
            <img src={keyboard} alt="keyboard" />
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider