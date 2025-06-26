import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavItems } from "./NavItems";
function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-list">
          {NavItems.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  className={item.cName}
                  onClick={item.onClick}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          {/* <li>
                      <NavLink  className='navbar-link' onClick={()=>setMenuIcon(false)} to="/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/about">About Us</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/facilities">Facilities</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/learning">Learning</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/admission">Admission</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/photogallery">PhotoGallery</NavLink>
                  </li>
                  <li>
                      <NavLink className='navbar-link' onClick={()=>setMenuIcon(false)} to="/contact">Contact Us</NavLink>
                  </li> */}
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
}
const Nav = styled.section`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    .cart-icon--link {
      position: relative;

      .cart-icon {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total {
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon [name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
      color:white;
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      color: ${({ theme }) => theme.colors.helper};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 0s linear;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 0s linear;
      .navbar-link {
        font-size: 4.2rem;
      }
    }
  
  }
`;

export default Navbar;
