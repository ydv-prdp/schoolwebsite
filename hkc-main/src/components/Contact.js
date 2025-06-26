import React, {useRef} from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75cla6n', 'template_eagxcmc', form.current, '1xH2kS3PW-vYikG55')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully");
          Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = ""));
            document.querySelector("textarea").value="";
      }, (error) => {
          console.log(error.text);
      });
  };
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container{
      margin-top:6rem;
      text-align:center;
    };
    .contact-form{
      max-width:50rem;
      margin:auto;

      .contact-form-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;

        input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;
          width:100%;
          margin-left:auto;
          margin-right:auto;
          
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
  return (
    <Wrapper className='section'>
      <h2 className='common-heading'>Feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.681934282886!2d79.31837951558693!3d29.055987382252706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7ee923473d8f%3A0x227558cbd04a2aa!2sHoly%20Krishna&#39;s%20College!5e0!3m2!1sen!2sin!4v1678168235973!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <div className='container'>
        <div className='contact-form'>
        <form
                ref={form} onSubmit={sendEmail}
                className="contact-form-inputs"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="name"
                  autoComplete="off"
                  required
                />
                {/* <input
                  type="text"
                  name="class"
                  placeholder="class sought for"
                  autoComplete="off"
                  required
                /> */}
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
    </Wrapper>
  )
}

export default Contact