import React from 'react'
import styled from 'styled-components'

function Admission_Withdrawal() {
  return (
    <Wrapper>
    <h3>Withdrawal</h3>
    <p>1. If a child has to be withdrawn from school, parents are required to give one calendar month’s notice in writing, failing which, two months fee will be charged in lieu thereof. Exception may be made in case of sudden transfer of government or Military personnel.</p>
    <p>2. Those who leave the school in May must in all cases pay the fees for the month of June.</p>
    <p>3. Security is refundable only after one month’s written notice of withdrawal. If security money is not claimed within 3 months of withdrawal, this amount will stand forfeited.</p>
  </Wrapper>
)
}
const Wrapper = styled.section`
p{
  font-size:2.3rem;
  line-height:1.1;
  text-align:justify;
}
`

export default Admission_Withdrawal