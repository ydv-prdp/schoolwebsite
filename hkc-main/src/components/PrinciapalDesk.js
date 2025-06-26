import React from "react";
import styled from "styled-components";

function PrinciapalDesk() {
  return (
    <Wrappper>
      <div className="grid grid-two-columns">
        <div className="section">
          <div className="container">
            <h3>{new Date().getFullYear()} - {new Date().getFullYear()+1} </h3>
            <h3>Register Online</h3>
            <div className="contact-form">
              <form
                action="https://formspree.io/f/xdovzvvp"
                method="POST"
                className="contact-form-inputs"
              >
                <input
                  type="text"
                  name="username"
                  placeholder="student name"
                  autoComplete="off"
                  required
                />
                <input
                  type="text"
                  name="class"
                  placeholder="class sought for"
                  autoComplete="off"
                  required
                />
                 <input
                  type="text"
                  name="fname"
                  placeholder="father's name"
                  autoComplete="off"
                  required
                />
                 <input
                  type="number"
                  name="cnumber"
                  placeholder="contact"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  required
                />
                <textarea
                  name="address"
                  cols="30"
                  rows="6"
                  placeholder="Your address"
                  autoComplete="off"
                  required
                ></textarea>
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
        <div>
          <h3>PRINCIPAL'S MESSAGE</h3>
          <p>
            Dear Parents and Students, Welcome to Holy Krishna’s College ! I
            extend a very warm welcome to all of you. At HKC, we believe that
            all students are gifted learners and our desire is to help them
            learn in the best way they can to nurture them as life-long
            learners. We will strive to offer an abundance of opportunities for
            students to experience, learn, explore their strengths and to hone
            their skills for their successful future. As the Principal of the
            school, I feel honoured and privileged to be a part of an
            Educational Institution where every individual is a learner and
            every day is an opportunity to learn and discover. We would like to
            create a community of learners, where everyone learns, including us
            indeed. Creating a habitat of Learning for the 21st century learner
            is the most engaging, enriching and empowering engagement a
            community undertakes. I wish to invite Parents, as collaborators in
            this endeavour. I look forward to working with you and developing a
            relationship that will assist in the growth of your child.
          </p>
        </div>
      </div>
    </Wrappper>
  );
}
const Wrappper = styled.section`
  h3 {
    text-align: center;
    font-size: 5rem;
  }
  p {
    padding: 0 2rem 0 0;
    font-size: 2rem;
    text-align: justify;
    font-weight: 500;
    line-height: 1.5;
  }
  padding: 9rem 0 5rem 0;
    .container{
      margin-top:0rem;
      text-align:center;
    };
    .contact-form{
      max-width:50rem;
      margin:auto;

      .contact-form-inputs{
        display:flex;
        flex-direction:column;
        gap:1.2rem;

        input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;
          
          &:hover{
          background-color:${({theme})=>theme.colors.white};
          border:1px solid ${({theme})=>theme.colors.btn};
          color:${({theme})=>theme.colors.btn};
          transform:scale(0.9);
        }
        }

      }
    }
`;
export default PrinciapalDesk;
