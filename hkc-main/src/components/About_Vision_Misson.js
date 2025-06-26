import React from 'react'
import styled from 'styled-components'

function About_Vision_Misson() {
  return (
    <Wrapper>
        <div>
            <h3>Vision</h3>
            <p>We at Holy Krishna’s College, share a single vision to cultivate and nurture young minds into life-long learners who develop the courage, competence, and knowledge for success now and in the future.</p>
            <h3>Mission</h3>
            <p>To develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through inter-cultural understanding and respect.</p>
                <p>We do this through an environment that inspires, motivates and challenges all students to develop intellectual independence, creativity and curiosity and a sense of responsibility in school and outside.</p>
                <p>We adopt an integrated holistic approach towards facilitating all round character building, cultivating values of respect, integrity, compassion justice and providing learning opportunities for all students.</p>
                <p>HKC's Nine Gems-Is a model that balances academics through Project based learning with Personality Development</p>
                <p>We integrate social-emotional learning throughout the curriculum, so students practice fundamental life skills – building self-esteem, leadership, entrepreneurship cooperation, and decision-making abilities.</p>
                <p>Valuing all disciplines – the arts, sciences, humanities and physical development excelling in sports, and performing arts - emphasis on music, dance, theater and visual arts, instilling ethics and discipline and the spirit to serve.</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  p{
    font-size:2.3rem;
    line-height:1.1 
  }

`
export default About_Vision_Misson