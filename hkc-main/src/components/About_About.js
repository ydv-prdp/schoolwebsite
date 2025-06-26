import React from 'react'
import styled from 'styled-components'

function About_About() {
  return (
    <Wrapper>
        <h3>About Us</h3>
        <p>Holy Krishna’s College which was established in 2006. It is among the best K12 CBSE schools in Dineshpur. It has consistently produced top results in board examinations.</p>
        <p>We are certified as <span className='catA'>‘A’ Category School</span> on the basis of CBSE Board Results.</p>
        <p>School is centrally located in Dineshpur. It has very good infrastructure with big library, labs and computer room. We also have Volleyball, Basket ball court, Cricket Ground and Athletics related activities.</p>
        <p>School has a different take on learning as it believes children could learn when they do it with their own hands, called as touch and feel education.</p>
        <p>We are the pioneers in Innovative Education as emphasized by NINE GEMS namely:</p>
        <p className='gem'>1. Academic Excellence, Collaborative and Project Based Learning.</p>
        <p className='gem'>2. Sports, Health and Fitness Excellence</p>
        <p className='gem'>3. Digital and Visual Arts</p>
        <p className='gem'>4. Personality Development, Speech and Drama</p>
        <p className='gem'>5. Creativity, Innovation & Problem Solving</p>
        <p className='gem'>6. Entrepreneurship & Leadership Development </p>
        <p className='gem'>7. Universal Values, Ethics & Discipline</p>
        <p className='gem'>8. Community Connection, Care and Conserve</p>
        <p className='gem'>9. Life Skills, Career & Vocational Competencies</p>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    p{
    font-size:2.3rem;
    line-height:1.1 
   }
   .gem{
    color:maroon;
   }
   .catA{
    color:red
   }
`
export default About_About