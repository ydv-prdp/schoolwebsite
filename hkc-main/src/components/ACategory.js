import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from '../styles/ImageSlider';
import { ImgSliderACat } from './ImgSliderItems';
import Typewriter from 'typewriter-effect';

const value = null;
function ACategory() {
  return (
   <Wrapper>
    <h3> <Typewriter
     options={{
    strings: [`'A' CATEGORY SCHOOL`],
    autoStart: true,
    loop: true,
  }}
/></h3>
    <div className='grid grid-two-columns container'>
        <div className="box">
           <p className='para1'>Consistently producing top results making us Certified as <span>‘A’</span> Category School on the basis of CBSE Board Results.</p> 
        </div>
        <div className='box'>
           <p className='para2'>School has a different take on learning as it believes children could learn when they do it with their own hands, called as touch and feel education.</p>
        </div>
    </div>
   </Wrapper>
  )
}
const Wrapper = styled.section`
    h3{
        text-align:center;
        font-size:5rem;
    }
    .box{ 
               p{
                text-align: justify;
                font-size: 2.5rem;
                line-height: 1.2;
                padding-bottom:5px;
               }
            }
    span{
        color:red;
    }
   img{
    width:100%;
    transition: all 250ms ease-in;
    &:hover{
        transform: scale(1.05);
        opacity: 0.8;
    }
   }

   
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
               h3{
                font-size: 3.8rem;
               }
            .box{ 
               p{
                text-align: justify;
                font-size: 2.5rem;
                line-height: 1.2;
               }
            }
            img{
                width:100%;
            }
           
        }

`;
export default ACategory