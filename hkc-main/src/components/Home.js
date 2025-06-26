import React from 'react'
import styled from 'styled-components';
import ImageSlider from '../styles/ImageSlider';
import AboutHKC from './AboutHKC';
import ACategory from './ACategory';
import PrinciapalDesk from './PrinciapalDesk';
import { ImgSliderACat, ImgSliderItems } from './ImgSliderItems';
import Notice from './Notice';
import ImageHomeGallery from './ImageHomeGallery';

function Home() {
  return (
    <Wrapper>
        <ImageSlider imgArr={ImgSliderItems}></ImageSlider>
          <ACategory></ACategory>
          <Notice></Notice>
        {/* <ImageSlider imgArr={ImgSliderACat}></ImageSlider> */}
        {/* <AboutHKC></AboutHKC>
        <PrinciapalDesk></PrinciapalDesk> */}
        <ImageHomeGallery></ImageHomeGallery>
    </Wrapper>
  )
}
const Wrapper = styled.section`

`;
export default Home