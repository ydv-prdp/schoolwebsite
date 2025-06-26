import React from 'react'
import styled from 'styled-components'

function Admission_Reg() {
  return (
    <Wrapper>
        <h3>Registration</h3>
        <p>The parents or guardians of prospective students should register the name of the child along-with the mention of the class and academic year to which admission is sought.</p>
        <p>Children are admitted to Holy Krishna’s College from Class NC onwards.
</p>
       
        <p>Newly admitted children will be permitted to join only on completion of admission form</p>
        <p className='gem'>1. Full payment of fee, as applicable.</p>
        <p className='gem'>2. Submission of Transfer Certificate, previous school’s Result Sheet/ Record and Transcript /Board Examination Result, Conduct Certificate, Health Certificate, 2 copies of passport size photographs and Date of Birth Certificate</p>
        <p className='gem'>3. Other attached documents, as required with the duly filled and signed Application Form.</p>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    .gem{
        color:maroon;
    }
    h3{
    font-weight:500;
    font-size:3rem;
    text-align:center;
    margin-bottom:1.5rem;
  }
    p{
    font-size:2.3rem;
    line-height:1.1;
    text-align:justify 
  }
`;
export default Admission_Reg