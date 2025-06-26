import React, { useState } from 'react'
import styled from 'styled-components'
import Admission_AppForm from './Admission_AppForm'
import Admission_Conduct from './Admission_Conduct'
import Admission_Fee from './Admission_Fee'
import Admission_Reg from './Admission_Reg'
import Admission_SchoolTerms from './Admission_SchoolTerms'
import Admission_SchoolUniform from './Admission_SchoolUniform'
import Admission_Withdrawal from './Admission_Withdrawal'

function Admission() {
  const [active, setActive] = useState("Registration");
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Wrapper>
      <div className="grid grid-two-columns container">
        <div>
          {active === "Registration" && <Admission_Reg/>}
          {/* {active === "Application_Form" && <Admission_AppForm/>} */}
          {active === "School_Uniform" && <Admission_SchoolUniform/>}
          {active === "Conduct" && <Admission_Conduct/>}
          {active === "Withdrawal" && <Admission_Withdrawal/>}
        </div>
      
        <div className='nav'>
          <h3>Admission</h3>
          <div onClick={goToBtn}>
            <button onClick={()=>setActive("Registration")}>Registration</button>
            {/* <button onClick={()=>setActive("Application_Form")}>Application Form</button> */}
            <button onClick={()=>setActive("School_Uniform")}>School Uniform</button>
            {/* <button onClick={()=>setActive("School_Terms")}>School Terms</button> */}
            {/* <button onClick={()=>setActive("School_Fee")}>School Fee</button> */}
            <button onClick={()=>setActive("Conduct")}>Conduct</button>
            <button onClick={()=>setActive("Withdrawal")}>Withdrawal</button>
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
    font-size:2.3rem;
    line-height:1.1;
  }
  .nav{
    top:20rem;
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
export default Admission