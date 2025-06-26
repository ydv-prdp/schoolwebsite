import React from 'react'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <MainHeader>
            <NavLink to="/">
                <div className='header'>
                    <img src="./images/schoolLogo.png" alt="schoolLogo"/>
                    <h3>HOLY KRISHNA'S COLLEGE</h3>
                </div>
            </NavLink>
            <Navbar/>
        </MainHeader>
        
      )
    }
    const MainHeader = styled.section` 
        padding:0 4.8rem;
        height:10rem;
        background-color:${({theme})=>theme.colors.footer_bg};
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:fixed;
        top:0;
        width:100%;
        z-index:100; 
        h3{
            color:white;
            font-size:2rem;
            font-weight:400;
            
        }
        h3:hover{
            color: ${({ theme }) => theme.colors.helper}  
        }
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
                padding: 0;
                display: flex;
                justify-content: space-evenly;
                h3{
                    font-size: 2rem;
                }
                img{
                    width:8rem;
                    height:10rem;
                    object-fit: contain;
                    margin-left:-1rem;
                    
                }
        }
        .header{
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:15rem;
                height:10rem;
                object-fit: contain;
                
            }
        }
      
    `;

export default Header