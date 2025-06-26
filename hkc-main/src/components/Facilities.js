import React from 'react'
import styled from 'styled-components'

function Facilities() {
  return (
    <Wrapper>
      <div className='container'>
      <div >
      <h3>Facilities</h3>
        <p>HOLY KRISHNA’S COLLEGE in Dineshpur is the most happening place of Gadarpur Block. The campus is spread over 2 acres of verdant greenery, with a spacious playground. The school building is aesthetically designed by a renowned architect to be a space that facilitates collaborative learning and free movement while being environment friendly.</p>
        <p>Each floor within the main school building is designed to be a “mini” learning centre and includes multi-purpose learning spaces in the form of utility rooms, open terraces, and interaction areas. Complementing the classrooms are a multitude of learning centres, science laboratories, music conservatories, libraries, indoor auditorium/indoor games hall, big playground and specialty rooms amongst others. All these elements come together as a collective whole to create an environment that enhances experiential learning as HKC, Dineshpur.
        </p>
      </div>
        
        <div className='card'>
          <h4>Classrooms</h4>
          <p>The classrooms at HKC are designed to be spacious and well-lit, enabling students to maximize his or her individual learning. Each classroom has an optimum capacity of 30 students. The furniture is child-safe with rounded corners to prevent injury and ergonomically designed for comfort and the right posture at all times. Classrooms are also equipped with Green/Whiteboards.</p>
          <p>
          The layout and space planning is grade-appropriate and leaves room to incorporate student work, mood boards, bulletin boards, reading corners and other such elements. More than anything, we envision the HKC’s classrooms to be a living, breathing organism that changes color, texture, and character based on its students .
          </p>
        </div>
        <div className='card'>
          <h4>Laboratories (Science, Math, Languages…)</h4>
          <p>Custom designed according to the relevant subject matter and equipped with state-of-the-art working models, tools, and experiments.</p>
        </div>
        <div className='card'>
          <h4>Visual Arts</h4>
          <p>Freeing up creative expression through pictorial and graphical representations. An exclusive art studio to enhance the visual and tactile learning experience.</p>
        </div>
       <div className='card'>
       <h4>Speciality Rooms</h4>
        <p>Designed to support core academics and co-curricular programmes with audio–video labs, music and dance rooms, media centre, and multipurpose halls, meet the experts, poster sessions, seminars and exhibitions etc.</p>
       </div>
       <div className='card'>
       <h4>Library</h4>
        <p>Big library for age-appropriate reading resources combined with digital resources, electronic databases, and internet access for the inquisitive mind.</p>
       </div>
       <div className='card'>
       <h4>Security</h4>
        <p>Security at HKC is maintained through a combination of trained and well-qualified security personnel who guard various entry and exit points. Strategically located CCTV cameras at various points in the campus monitor and keep track of movement within the premises. Security measures such as fire alarms, fire extinguishers etc, are installed as per government norms and follow best practices in security management. Entry of non-authorized personnel on the campus is strictly prohibited.</p>
       </div>
       <div className='card'>
           
       <h4>Technology</h4>
        <p>Latest technology is an integral part of the rich and varied learning environment offered by our school. Some of the facilities include smart classrooms, e-books, best-of-breed instructional videos etc.</p>
       </div>
       <div className='card'>
       <h4>First Aid Center</h4>
        <p>Fully functional first aid centre staffed with a qualified nurse during school hours with provision for doctor-on-call. Tie-up with a renowed Hospital for any emergencies located 15 minutes away.</p>
       </div>
       <div className='card'>
       <h4>Transportation</h4>
        <p>A secure and GPS-tracking enabled fleet of buses for transportation of students and staff with trained drivers and attendents.</p>
       </div>
       <div className='card'>
       <h4>Yoga</h4>
        <p>Students are trained on yoga for the fitness of body and mind</p>
       </div>
       <div className='card'>
       <h4>Bus Routes</h4>
        <p>Holy Krishna’s College has a fleet of buses running in various routes catering to the needs of students from Gadarpur, Gularbhoj, Jafarpur, Chatarpur covering locations in the interiors too.There are well trained and experienced bus drivers and attendant to maintain safe and pleasant experience for the students</p>
       </div>
     
       
     
        
     
      
      </div>
      
    <p>

    </p>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top:10rem;
  h3{
    font-size:4rem;
  font-weight:500;
  text-align:center;
  }
h4{
  font-size:3rem;
  font-weight:500;
  text-align:center;
  border-bottom:1px solid lightgray;
}
p{
    font-size:2.3rem;
    line-height:1.1;
    text-align:justify;
  }
  .card{
    border:1px solid lightgray;
    border-radius:10px;
    padding:5px;
    margin:20px 0;
  }
`
export default Facilities