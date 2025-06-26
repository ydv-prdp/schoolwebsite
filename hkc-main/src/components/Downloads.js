import React from 'react'
import styled from 'styled-components'
import GeneralInformation from './mandatory_public_disclosure/GeneralInfo'
import Staff from './mandatory_public_disclosure/Staff'
import ResultX from './mandatory_public_disclosure/ResultX'
import ResultXII from './mandatory_public_disclosure/ResultXII'
import Infra from './mandatory_public_disclosure/Infra'
import Documents from './mandatory_public_disclosure/Documents'
import Academics from './mandatory_public_disclosure/Academics'
function Downloads(){
    return (
        <Wrapper>
          <div className='container'>
          <div>
            <h2>Mandatory Public Disclosure</h2>
          </div>
          <div>
              <div className='box'>
                <h3>A - General Information</h3>
                <a href={"/mpd/MANDATORY_PUBLIC_DISCLOSURE.pdf"} className='box2' target="_blank">CBSE SARAS MANDATORY DISCLOSURE</a>
              </div>
              <GeneralInformation/>
          </div>
          <div>
              <h3>B - Documents and Information</h3>
              <Documents/>
          </div>
          <div>
              <h3>C - RESULT AND ACADEMICS</h3>
              <Academics/>
          </div>
            {/* <div className='content'>
              <h3>B- Documents and Information </h3>
             {MandatoryDisclosureList.map((disclosure) => (
                <div className="card" key={disclosure.id}>
                    <h4>{disclosure.title}</h4>
                    <div className='card-content'>
                        <p>{disclosure.subtitle}</p>
                        <a href={`${disclosure.notice}`} target="_blank" className='download-link'> 
                            {disclosure.title} <FaArrowDown className="top-btn--icon" />
                        </a>
                    </div>
                </div>
            ))}
            </div>  */}
            <div>
              <h3>D - Staff(Teaching)</h3>
              <Staff/>
            </div>
            <div>
              <h3>Result Class: X</h3>
              <ResultX/>
            </div>
            <div>
              <h3>Result Class: XII</h3>
              <ResultXII/>
            </div>
             <div>
              <h3>E - SCHOOL INFRASTRUCTURE</h3>
              <Infra/>
            </div>
            
          </div>
        </Wrapper>
      )
    }
    const Wrapper = styled.section`
      margin-top:10rem;
      h2{
        font-weight:500
      }
      h3{
        font-size:3.3rem;
      font-weight:500;
      text-align:left;
      margin-top:1rem;
      margin-bottom:1rem;
      }
    h4{
      font-size:3rem;
      font-weight:500;
      text-align:center;
      border-bottom:1px solid lightgray;
    }
      table{
        width:100%;
      }
        .box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          border:1px solid black;
        }
          .box2{
            border:1px solid black;
            margin-right:5rem;
            padding:1rem 2rem;
            font-size:2rem;
            cursor:pointer;
              
              // animation: glow 1s infinite alternate;
          }
              a{
                text-decoration:none;
              }
              .box2:hover,a:hover{
                background-color:rgb(10, 20, 53);
                color:white
              }
          @keyframes glow {
              from {
                box-shadow: 0 0 10px -10px  rgb(255, 237, 181);
              }
              to {
                box-shadow: 0 0 10px 10px rgb(255, 237, 181);
              }
          }
    p{
        font-size:2.3rem;
        line-height:1.1;
        text-align:justify;
        margin-bottom:0.5rem;
      }
      .card{
        border:1px solid lightgray;
        border-radius:10px;
        padding:5px;
        margin:20px 0;
        width:100%;
      }
        .content{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }
            .card-content{
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:2rem
            }
                .download-link{
                    // display:flex;
                    // align-items:center;
                    // gap:0.2rem;
                    // border:1px solid;
                    // border-radius:20px;
                    // padding:0.5rem;
                    white-space:pre;
                }
`

export default Downloads