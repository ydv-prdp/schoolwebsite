import React, { useEffect } from 'react'
import styled from 'styled-components'


const value = null;
function WhyHKC() {
  return (
   <Wrapper>
    <section className='why'>
    <h3>Why Holy Krishna's College, Dineshpur?</h3>
    <p className='details'>Throughout the academic session, a range of essential skills and values are instilled in students, both overtly and subtly, as an integral part of their learning journey</p>

    <div className='grid grid-two-columns container'>
        <div className="box">
            <h4>Career Skills</h4>
            <p className='para1'>
                <ul>
                    <li>Student Leadership</li>
                    <li>Personality Development</li>
                    <li>Digital Fluency</li>
                    <li>Innovative Thinking</li>
                    <li>Verbal & Nonverbal Communication</li>
                </ul>
            </p> 
        </div>
        <div className='box'>
            <h4>Practical Skills</h4>
            <p className='para1'>
               
                    <ul>
                        <li>Mental Health Management</li>
                        <li>Anxiety Reduction</li>
                        <li>Analytical Skills</li>
                        <li>Intuitive Reasoning</li>
                        <li>Social Awareness</li>
                    </ul>
               
            </p> 
        </div>
    </div>
    </section>
   </Wrapper>
  )
}
const Wrapper = styled.section`
    .why{
        background-color:#f8f9fa;
        // background-image:url('career.png');
        height:40vh;
        padding-top:1rem;
    }
    h3{
        text-align:center;
        font-size:4rem;
        font-weight:500;
        margin-top:1rem;
    }
    h4{
        text-align:left;
        font-size:2.8rem;
        font-weight:500;
        margin-top:1.5rem;
    }
    ul li{
        list-style-type:disc;
    }
    .details{
        text-align:center;
        font-size:1.8rem;
        font-weight:500
    }
    .box{ 
               p{
                text-align: justify;
                font-size: 2.2rem;
                line-height: 1.2;
                padding-bottom:5px;
                margin:auto;
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
export default WhyHKC