import React from 'react'
import styled from 'styled-components'

function About_Intro() {
  return (
    <Wrapper>
   
        <h3 >INTRODUCTION</h3>
        <p className='para'>Holy Krishna’s College is an educational institution under the aegis of
        the New Age Children Welfare Society. Holy Krishna's College opened its doors in 2006 at Ward no 1, Dineshpur driven by his passion it was the dream project of <span>Mr Firtu Yadav</span>, a pioneer in school education. Today, it fosters an enriched educational life for over 1500 students up to Class XII.

        Holy Krishna's College boldly asserts that a developmental approach to education is universally valuable for children, and that education can succeed in the face of academic and social challenges. Therefore, HKC's ultimate aim is to make innovative model of education available to children, teachers, and parents in Dineshpur. Starting from the pre-primary classes, the school is a
        perfect springboard enabling students to have an effortless transition to
        university education, both in India and internationally. The school is
        equipped with state of the art infrastructure and facilities. We have a
        faculty of exceptional academicians who are trained in contemporary
        pedagogy while being rooted in traditional values that are at the core of
        the Indian ethos. Each of our teachers and instructors are professionally
        trained and have sufficient expertise in their respective fields, ensuring
        that each of our students receive the highest quality of education and
        hence become successful individuals as they move onto their respective
        career paths.</p>
   
</Wrapper>
)
}
const Wrapper = styled.section`

  h3{
  font-weight:500;
  font-size:3rem;
  text-align:center
  }
 
    span{
      color:red
    }
  .para{
    font-size: 2.3rem;
    line-height: 1.1;
  }
`

export default About_Intro