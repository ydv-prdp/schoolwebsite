import React from "react";
import styled from "styled-components";

function AboutHKC() {
  return (
    <Wrapper>
    <div className="grid grid-two-columns">
        <div>
            <h3>ABOUT HOLY KRISHNA’S COLLEGE</h3>
            <p>Holy Krishna’s College is an educational institution under the aegis of
            the New Age Children Welfare Society. The school opens its doors for all
            the students. Starting from the pre-primary classes, the school is a
            perfect springboard enabling students to have an effortless transition to
            university education, both in India and internationally. The school is
            equipped with state of the art infrastructure and facilities. We have a
            faculty of exceptional academicians who are trained in contemporary
            pedagogy while being rooted in traditional values that are at the core of
            the Indian ethos. Each of our teachers and instructors are professionally
            trained and have sufficient expertise in their respective fields, ensuring
            that each of our students receive the highest quality of education and
            hence become successful individuals as they move onto their respective
            career paths.</p>
        </div>
        <div>
            <img src="./images/hkc1.jpg" alt="school"/>
        </div>
    </div>
    
    </Wrapper>
  );
}
const Wrapper = styled.section`
    h3{
        text-align:center;
        font-size:5rem;
    }
    p{
        padding:0 0 0 1rem;
        font-size:2rem;
        text-align:justify;
        font-weight:500;
        line-height:1.5;
    }
    img{
        width:80%;
        height:40vh;
    }    
`;
export default AboutHKC;
