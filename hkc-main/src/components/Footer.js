import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import Button from '../styles/Button';

function Footer() {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
    return (
        <Wrapper>
        <section className='contact-short'>
          <div className='grid grid-two-columns'>
            <div>
              <h3>Ready to get started</h3>
              <h3>Talk to us today</h3>
            </div>
            <div className='contact-short-btn'> 
              <NavLink to="/contact">
                <Button onClick={goToBtn}>Get Started</Button>
              </NavLink>
            </div>
          </div>
        </section>
    
          <footer className='footer-content'>
              <div className='container grid grid-three-column'>
                  <div className='footer-about'>
                    <h3>QUICK LINKS</h3>
                    <NavLink to="/"><p onClick={goToBtn}>HOME</p></NavLink>
                    <NavLink to="/about"><p onClick={goToBtn}>ABOUT US</p></NavLink>
                  </div>   
                  <div className='footer-social'>
                      <h3>FOLLOW US</h3>
                      <div className='footer-social-icons'>
                        <div><a href="https://www.facebook.com/holykrishnacollege" target="_blank"><FaFacebook className='icons'/></a></div>
                        <div><a href="https://www.instagram.com/hkc_a_cbse_school/" target="_blank"><FaInstagram className='icons'/></a></div>
                        <div><a href="https://www.youtube.com/@holykrishnascollege115/videos" target="_blank"><FaYoutube className='icons'/></a></div>
                      </div>
                  </div>
                  <div className='card'>
                     <h3>CONTACT US</h3>
                     <NavLink to="/contact"><p onClick={goToBtn}>Gularbhoj road, Ward no 1, Dineshpur, Dist. Udham Singh Nagar. Pin Code-263160 Uttarakhand</p></NavLink>
                      <NavLink to="/contact"><p onClick={goToBtn}>+91 9758037855</p></NavLink>
                      <NavLink to="/contact"><p onClick={goToBtn}>Email: holykrishna06@gmail.com</p></NavLink>
                  </div>
              </div>
              
              <div className='footer-bottom-section'>
              <hr/>
                  <div className='container grid grid-three-column footer_bottom'>
                      <div>
                      <p>&copy;Copyright {new Date().getFullYear()} - {new Date().getFullYear()+1} by Holy Krishna's College. </p>
                      </div>
                      <div className='mid'>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS AND CONDITIONS</p>
                      </div>
                      <div>
                        <p>Designed by <span><a href="https://www.instagram.com/prdp_ydv10" target='_blank'>Pradeep Yadav</a></span></p>
                      </div>
                  </div>
               
              </div>
          </footer>
        </Wrapper>
      )
    }
    const Wrapper = styled.section`
      .contact-short{
        max-width:60vw;
        margin:auto;
        padding:5rem 10rem;
        background-color:${({theme})=>theme.colors.bg};
        border-radius:1rem;
        box-shadow:${({theme})=>theme.colors.shadowSupport};
        transform:translateY(50%);
        .grid div:last-child{
          justify-self:end;
          align-self:center;
        }
      }
      footer{
        .footer-about{
          p{
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 1px;;
            &:hover{
              color: ${({ theme }) => theme.colors.helper} ;
            }
          }

        }
        .card{
          p{
            font-size: 1.5rem;
            &:hover{
              color: ${({ theme }) => theme.colors.helper} ;
            }
          }
        }
        .footer_bottom{
          a{
                text-decoration: underline;
                color:white;
                &:hover{
                  color: ${({ theme }) => theme.colors.helper} ;
                }
              }
        }
        @media (max-width:${({theme})=>theme.media.mobile}){
        
        .footer-about{
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: 250ms all ease-in;
          h3{
            font-size: large;
          }
          p{
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 1px;;
            &:hover{
              color: ${({ theme }) => theme.colors.helper} ;
            }
          }
        }
        .footer-social{
          display: flex; 
          flex-direction: column;
          align-items: center;
          h3{
            font-size: large;
          }
          &:hover{
              color: ${({ theme }) => theme.colors.helper} ;
            }
        }
       .card{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
          h3{
            font-size: large;
          }
          p{
            font-size: 1.7rem;
            line-height: 1.5;
            text-align: center;
            letter-spacing: 0.5px;
            &:hover{
              color: ${({ theme }) => theme.colors.helper} ;
            }
          }
       }
       .footer-bottom-section{
          .footer_bottom{
              display: flex;
              align-items: center;
              flex-direction: column;
              width:80%;
              margin-left: auto;
              margin-right: auto;
              p{
                font-size: 1.7rem;
                line-height: 1.5;
              }
              a{
                text-decoration: underline;
                color:white;
                &:hover{
                  color: ${({ theme }) => theme.colors.helper} ;
                }
              }
              .mid{
                display: flex;
                flex-direction: column;
                align-items: center;
              }
          }
       }

      
    }
        padding:14rem 0 9rem 0;
        background-color:${({theme})=>theme.colors.footer_bg};
        
        h3{
          color:${({theme})=>theme.colors.hr};
          margin-bottom:2.4rem;
          font-size:2rem;
        }
        p{
          color:${({theme})=>theme.colors.white};
          font-size:1.3rem;
        }
        .footer-social-icons{
          display:flex;
          gap:2rem;
            div{
              padding:1rem;
              border-radius:50%;
              border:2px solid ${({theme})=>theme.colors.white};
              transition: .5s ease;

              &:hover{
                background-color: ${({ theme }) => theme.colors.helper};
                color:white;
                box-shadow: 0 0 1rem white; 
                }
    
              .icons{
                color:${({theme})=>theme.colors.white};
                font-size:2rem;
                position:relative;
                cursor:pointer

              }
            }
        }
      }
      .footer-bottom-section{
        padding-top:9rem;
        hr{
          margin-bottom:2rem;
          color:${({theme})=>theme.colors.hr};
          height:0.1rem;
        }
      }
      @media (max-width:${({theme})=>theme.media.mobile}){
        
        .contact-short{
          max-width:95vw;
          padding:2rem;
          display:flex;
          justify-content:center;
          align-items:center;
    
          .contact-short-btn{
            text-align:center;
          }
        }

      
    }
    
    `;

export default Footer