import React from 'react'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <MainHeader>
            <div className='header'>
                <NavLink to={"/"}>
                    <div className='header_child1'>
                        <img src="./images/schoolLogo.png"  alt="schoolLogo"/>
                        <h3>HOLY KRISHNA'S COLLEGE</h3>
                    </div>
                </NavLink>
            </div>
            <div className='navbar_section'>
                <Navbar/>
            </div>
        </MainHeader>
        
      )
    }
    const MainHeader = styled.section` 
        padding:0 4.8rem;
        height:15rem;
        background-color:${({theme})=>theme.colors.footer_bg};
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-items:center;
        position:fixed;
        top:0;
        width:100%;
        z-index:100; 
        .navbar_section{
            padding-top:5px;
            padding-bottom:5px;
        }
        h3{
            color:white;
            font-size:5rem;
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
            width:75%;
            margin:auto;
            justify-content:center;
            align-items:center;
            img{
                width:15rem;
                height:10rem;
                object-fit: contain;
                
            }
        }
        .header_child1{
            display:flex;
            justify-content:start;
            align-items:center;
            gap:2rem;
        }
        .header_child1 img{
            border-right:2px solid white;
        }
        .header_child2{
            color:white;
            font-size:2rem;
        }
      
    `;

export default Header