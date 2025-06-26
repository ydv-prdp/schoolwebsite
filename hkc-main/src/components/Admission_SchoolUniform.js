import React from 'react'
import styled from 'styled-components'

function Admission_SchoolUniform() {
  return (
    <Wrapper>
      <h3>School Uniform</h3>
      <p>Students should be habitually clean and always neatly dressed. The school uniform should be worn on all working days and for all school functions. Parents are advised not to send any expensive personal items to school with their children.</p>    
      <table>
        <tr>
            <th className="text-center">CLASS</th>
			      <th className="text-center">BOY</th>
			      <th className="text-center">GIRL</th>
        </tr>
        <tr>
          <td><strong>Class Upto VI</strong></td>
          <td><span><strong>Shirt-full sleeved : </strong></span>Color-White<br/>
          <span><strong>Trousers : </strong></span>Color-Navy Blue<br/>
          </td>
          <td><span><strong>Shirt-full sleeved : </strong></span>Color-White<br/>
          <span><strong>Skirt </strong></span>Color- Navy Blue<br/>
        </td>
		  </tr>
      <tr>
        <td><strong>Class VII to XII</strong></td>
        <td><span><strong>Shirt-full sleeved : </strong></span>Color-White<br/>
        <span><strong>Trousers : </strong></span>Color-Navy Blue<br/>
        </td>
        <td><span><strong>Kurta : </strong></span>Color - Navy Blue<br/>
        <span><strong>Salwar : </strong></span>Color - White<br/>
        <span><strong>Dupatta : </strong></span>White : Same color as salwar<br/>
        <u><strong>Note :</strong></u><br/>
        kurta with round Nehru collar : Full sleeves, Salwar color taping at the end of sleeves.<br/>
        <span><strong>Socks: </strong></span>Same color as trousers and Salwar.<br/>
        <span><strong>Shoes: </strong></span>Black - 01 pair, White - 01 pair for Wednesday and Saturday.</td>
		</tr>
    <tr>
			<td colspan="3"><strong>Note : </strong>Students must wear school uniform during all working days except Wednesday and Saturday on which they are prescribed to wear track suits of their respective House-Colors.</td>
		</tr>
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  p{
    font-size:2.3rem;
    line-height:1.1;
    text-align: justify;
  }
  table {
  margin-top:1rem;
  border: 2px solid black;
  width: 600px;
  height: 200px;
  font-size:1.8rem;
}
  
th {
  border-bottom: 1px solid black;

}
td{
  border:1px solid black;
}
  
td {
  text-align: center;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
             table{
              width: auto;
             }
        }
`
export default Admission_SchoolUniform