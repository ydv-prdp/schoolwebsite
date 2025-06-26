import React, { useState } from 'react'
import styled from 'styled-components'
import About_About from './About_About'
import About_Campus from './About_Campus'
import About_Intro from './About_Intro'
import About_Princiapl from './About_Princiapl'
import About_Vision_Misson from './About_Vision_Misson'

function About() {
  const [active, setActive] = useState("Introduction")
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Wrapper>
        <div className="grid grid-two-columns container">
            <div>
              {active === "Introduction" && <About_Intro/>}
              {active === "Campus" && <About_Campus/>}
              {active === "Vision" && <About_Vision_Misson/>}
              {active === "Principal" && <About_Princiapl/>}
              {active === "About" && <About_About/>}
            </div>
            
            <div className='nav'>
              <h3>The School</h3>
              <div onClick={goToBtn}>
              <button onClick={()=>setActive("Introduction")}>Introduction</button>
              <button onClick={()=>setActive("About")}>About Us</button>
              <button onClick={()=>setActive("Principal")}>From Principal's Desk</button>
              <button onClick={()=>setActive("Vision")}>Vision & Mission</button>
              <button onClick={()=>setActive("Campus")}>Campus</button>
              </div>
            </div>
         </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top:10rem;
  h3{
    font-weight:500;
    font-size:3rem;
    text-align:center;
    margin-bottom:1.5rem;
  }
  p{
    text-align:justify
  }
  .para{
    font-size:2rem;
    line-height:1.5
  }
  .nav{
    display:flex;
    flex-direction:column;
    gap:0.3rem;
  }
  button{
    width:100%;
    text-align:center;
    padding:1rem;
    cursor:pointer;
    font-size:2rem;
    margin-top:0.5rem;
  }
`

export default About