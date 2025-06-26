import React, { useRef }from "react";
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { NoticeList } from "../helper/NoticeList";

function Notice() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75cla6n', 'template_3q9b9nc', form.current, '1xH2kS3PW-vYikG55')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Wrapper>
      <div className="grid grid-three-column">
        <div>
          <h3>Make an enquiry</h3>
          <div className="container">
            <div className="contact-form">
              <form
                ref={form} onSubmit={sendEmail}
                className="contact-form-inputs"
              >
                <input
                  type="text"
                  name="user_name"
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
                  type="number"
                  name="from_number"
                  placeholder="contact no"
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
                  name="message"
                  cols="30"
                  rows="6"
                  placeholder="Your Message"
                  autoComplete="off"
                  required
                ></textarea>
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
        <div>
          <h3>Upcoming Events</h3>
          <div className="events">
            <div className="card">
              <div className="icon">
                <div className="day">01</div>
                <div className="month">July</div>
              </div>
              <div className="activity">School Reopens</div>
            </div>
            <div className="card">
              <div className="icon">
                <div className="day">26</div>
                <div className="month">July</div>
              </div>
              <div className="activity">Kargil Vijay Diwas</div>
            </div>
            {/* <div className="card">
              <div className="icon">
                <div className="day">12</div>
                <div className="month">May</div>
              </div>
              <div className="activity">Buddha Purnima</div>
            </div>
            <div className="card">
              <div className="icon">
                <div className="day">15</div>
                <div className="month">May</div>
              </div>
              <div className="activity">Yoga Contest</div>
            </div>
            <div className="card">
              <div className="icon">
                <div className="day">30</div>
                <div className="month">May</div>
              </div>
              <div className="activity">Summer Holidays</div>
            </div> */}
          </div>
        </div>
        <div className="notice__board">
          <h3>Notice Board</h3>

          {NoticeList.map((notice) => (
            <div className="notice" key={notice.id}>
            {/* <a href={`${notice.notice}`} target="_blank"> {notice.title}</a> */}
            <a> {notice.title}</a>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
h3{
    text-align:center;
    font-size:3rem;
    margin-bottom:2rem;
}
  .events {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .card {
    display: flex;
    gap: 2rem;
    border-bottom:.1rem solid red;
  }
  .icon {
    width: 10rem;
    height: 7rem;
    background-color: black;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  .day {
    color: white;
    font-size: 2rem;
    text-align: center;
    background-color: red;
    border-top-left-radius: 2rem;
  }
  .month {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }
  .activity {
    font-size: 2rem;
    color: red;
  }
  .notice {
    color: red;
    font-size: 2rem;
    border-bottom:0.2rem solid red;
    padding-bottom:2rem;
    margin-right: 3rem;
    &:hover{
      font-weight: 500;
    }
  }
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
          @media (max-width: ${({ theme }) => theme.media.mobile}) {
            margin-left: auto;
            margin-right: auto;
            width: 14rem;
            font-size: 1.8rem;
           
        }
          
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
export default Notice;
