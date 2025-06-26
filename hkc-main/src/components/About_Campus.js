import React from 'react'
import styled from 'styled-components'

function About_Campus() {
  return (
    <Wrapper>
        <h3>Campus</h3>
        <p>Welcomes you to a vibrant safe environment. These are some of the words parents use to describe Times World campus</p>
        <p>Spacious classrooms provide ample room for everything from mathematics to studio art. The building houses separate facilities for the Play School, Primary, the Middle School and Secondary. The school includes a fully-equipped science laboratory, a computer lab, , art room, dance room, and music room.</p>
        <p>A playground that provides creative opportunities for outdoor play and physical activity.</p>
        <p>The building, play areas, and front and back parking are on a pleasant and convenient site.</p>
        
    </Wrapper>
  )
}
const Wrapper = styled.section`
   p{
    font-size:2.3rem;
    line-height:1.1 
  }  
`

export default About_Campus