import React from 'react'
import styled from 'styled-components'

function Learning() {
  return (
    <Wrapper>
      <div className='container'>
      <div >
      <h3>Curriculum and Learning</h3>
        <p><strong>“Education is not preparation for life; education is life itself” – John Dewey</strong><i> </i></p>
        <p>The curriculum at HKC is designed to enable students to develop critical skills necessary for success in the real world by incorporating experiential learning and multi-disciplinary teaching methods. The core tenet behind our curriculum at HKC design is recognising the fact that learning is a dynamic process and each student learns differently. </p> 
        <p>Students are encouraged in their individual area of interest while being exposed to a multitude of topics, scenarios, and situations to help them become competent and capable learners. </p> 
        <p>HKC follows guidelines set by the Central Board of Secondary Education (CBSE). Each student benefits from a complementary skill set and classes in <strong>Language Arts, Mathematics, Science, Social Studies, Physical Education, Visual and Performing arts</strong> . English is the medium of instruction and is taught as the first language. Hindi is taught as a second language..
        </p>
      </div>
        
        <div className='card'>
          <h4>Pre-Primary Years</h4>
          <p>The curriculum at HKC has also designed a Pre-Primary programme to foster a love for learning and discovery. The curriculum for three- to six-year-olds is based on developmental needs in all aspects of growth: social, physical, intellectual, creative, and emotional.</p>
          <p>
          The Pre-Primary years combine self-directed play and unstructured activities in a specially designed environment which enables students to absorb new information through active participation, visual stimulation and listening, helping them to gain a broader understanding of the world we live in.</p>
        <p>Using a combination of the six senses, students are provided with new experiences to help build their cognitive and physical abilities. They learn to express various emotions, understand basic social interactions, and engage with the outside world. Gaining positive self-esteem and building confidence is an important goal in the Pre-Primary years.
          </p>
        </div>
        <div className='card'>
          <h4>Primary And Secondary Years (Grades I Onwards )</h4>
          <p>Our Primary and Lower Secondary curriculum provides a platform for developing basic concepts in Language Arts, Mathematics, Social Studies, and Science. The programme has a dual objective – to introduce students to functional topics and lay the foundation for future learning as well as enable student to strengthen their emotional and social abilities and become independent, courageous, and compassionate.</p>
          <p>
          There is an equal focus on building knowledge, fostering creativity and encouraging intellectual curiosity. The curriculum ensures that students acquire and build fundamental values, beliefs, and abilities which help them decode the world that we live in. All core subjects are complemented through co-curricular activities such as Art, Music, Dance, Sports, and Computer Education.
          </p>
        </div>
        <div className='card'>
          <h4>Co-Curricular activities</h4>
          <p>The Co-curricular program at HKC is broad, diverse and meant to engage students in activities beyond academics, explore new interests and develop a new dimension to their personality. Co-curricular activities offered at HKC include both sports as well as culturals.</p>
        </div>
       <div className='card'>
       <h4>Dance</h4>
        <p>Traditional Indian classical dance forms such as Bharatanatyam, Folk as well as Western dance forms are taught.</p>
       </div>
       <div className='card'>
       <h4>Music</h4>
        <p>Indian music along with theory of music lessons and classes for practicing vocal and instrumental music.</p>
       </div>
       <div className='card'>
       <h4>Theatre</h4>
        <p>Basic acting, advance improvisation, technical theatre and film analysis classes are provided.</p>
       </div>
       <div className='card'>
           
       <h4>Students Club</h4>
        <p>All students are unique in their abilities. HKC provides ample opportunities to hone their talent and transform them into holistically, developed individuals. The school has multi – dimensional Club Set –Up with a wide range of skill- oriented programmes. Our clubs serve as a platform for students to prove themselves in various fields other than academics. This lead to the emergence of new vistas to explore, grow and develop. Students are encouraged to participate in clubs which provide an early exposure to life beyond academics.</p>
       </div>
       <div className='card'>
       <h4>Some of our activities are:</h4>
        <p>Kalakriti , Technocrat, Music ( Vocal and Instrumental) , Symphony, Quizzing , Pottery, Dramatics , Dance, Literary( Hindi & English) , Educational Excursions, Gardening , Creative writing, Public speaking , Debating/ Expression.</p>
       </div>
      </div>
      
  
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
  text-transform: capitalize;
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


export default Learning