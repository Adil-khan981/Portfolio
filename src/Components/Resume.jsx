import React from 'react'

export default function Resume() {
  console.log("Resume")
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="resume-title">Resume</h2>
          <p>Career Objective
            A hardworking and dedicated Full Stack Developer with strong expertise in frontend and backend technologies (HTML, CSS, JavaScript, React.js, Express.js, MongoDB, FastAPI). Experienced in developing efficient web applications using OOPs concepts, Context API, Redux, Reducer, and ChatGPT. Seeking to be part of a dynamic team where I can maximize my skills.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h5>Adil Khan</h5>
                <p><em>Passionate and detail-oriented Web Developer with 6 months of hands-on internship experience in designing and developing responsive, user-centric web applications. Proficient in front-end technologies and capable of transforming ideas into fully functional digital solutions. Strong understanding of design principles with a focus on performance and user experience.</em></p>
                <ul>
                  <li>📍 Prayagraj</li>
                  <li>📞 9506640798</li>
                  <li>✉️ khaana108992@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h5>2024 - 2025</h5>
                <p><em>🏫 Institute: DUCAT IT Training School, Noida Sector-16, Delhi</em></p>
              </div>
              <div className="resume-item">
                <h4>Graduation</h4>
                <h5>2022 - 2025</h5>
                <p><em>🎓 B.Com (Professional) – Rajendra Singh (Rajju Bhaiya) University, Prayagraj (Formerly Allahabad State
                  University, Allahabad) | 2025
                </em></p>

              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>💼 Lab Assistant | [APCS College Of IT And Management] | 6 Months </h4>
                <h5>2023</h5>
                <p><em>•	[Key responsibilities such as data management, system monitoring, etc.]<br/>
                  •	[Mention any specific achievements if applicable]
                </em></p>
              
              </div>
              <div className="resume-item">
                <h4>Web Development Specialist (Internship)</h4>
                <h4>Intern (6 Months)
                Unified Mentor Company, Gurgaon, Haryana</h4>
                <h5>2023 – 2024</h5>
               
                <ul>
                  <li><em>Assisted in developing and maintaining responsive websites using HTML, CSS,Bootstrap,MaterialUI,JavaScript,React.JS,Redux,Next.JS,Express.JS,MangoDB.</em></li>
                  <li><em>Collaborated with senior developers to debug and optimize front-end code for improved performance.</em></li>
                  <li><em>Worked on integrating APIs and dynamic data using RESTful services in real-world projects.</em></li>
                  <li><em>Participated in daily stand-up meetings and sprint planning as part of the Agile team.</em></li>
                  <li><em>Developed 4+ functional web modules and components each month based on client requirements.</em></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
