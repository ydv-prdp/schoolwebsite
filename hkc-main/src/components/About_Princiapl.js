import React from 'react'
import styled from 'styled-components'

function About_Princiapl() {
  return (
    <Wrapper>
      <h3>From Principal's Desk</h3>
      <p>It is with a great delight and pride to give an insight into the life of our vibrant, successful school. Holy Krishna’s College can be seen in many forms through our website which reflects all aspects of school life within and beyond the classroom.</p>
      <p>
      We work tirelessly to ensure that each student is valued and appreciate his or her own worth as a person and respect for others. Our young people are nurtured in a supportive, caring environment which develops their emotional intelligence as well as the moral values essential to growth as a young leader.
      </p>
      <p>
      We work together to promote and develop a learning environment where students can reach their full potential by participating in a person centered, holistic education. Each student of the school is encouraged to be the best that he/she can be, to be inspired by our tradition for excellence and to make his/her own contribution across the academic, cultural, and sporting domains. We place a strong emphasis on respect for the individual and the rights of others.
      </p>
      <p>
      The School is focused on clear mission to provide the highest quality of education to our children. As we continue to build on our collective strengths and grow where we have opportunities, the focus will always remain on supporting our students so that they soar high.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  p{
    font-size:2.3rem;
    line-height:1.1 
  }
`

export default About_Princiapl