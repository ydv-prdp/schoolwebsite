import React from 'react'
import styled from 'styled-components'

function Admission_Conduct() {
  return (
    <Wrapper>
      <h3>Conduct</h3>
      <p>The school lays emphasis on self-discipline, without discipline it is not possible to achieve excellence in any field. It is our aim to imbibe in each student a sense of good manners, and moral values and behavior and to foster a sense of cooperation and respect for elders. For maintenance of discipline in school, introduction of card system has been made, which includes positive as well as negative cards.</p>
      <h3>Disciplinary Measures</h3>
      <p>The following measures will be adopted to enforce discipline:</p>
      <p>1. Oral warning and counseling.</p>
      <p>2. Written warning.</p>
      <p>3. Detention.</p>
      <p>4. Rustication and expulsion as per rules</p>
      <p>Other than academics students will be evaluated monthly on their behavior, regularity in work, maintenance of books and copies etc.</p>
      <p>Misbehaving students will be counseled by the school counselor/Principal and disciplinary action will be taken against them, if required.</p>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  p{
    font-size:2.3rem;
    line-height:1.1;
    text-align: justify;
  }
`

export default Admission_Conduct