import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './ats-resumebuilder.css';

const ATSResumebuilder = (props) => {
  const [workExperiences, setWorkExperiences] = useState([{ company: '', role: '', years: '' }]);
  const [educationEntries, setEducationEntries] = useState([{ school: '', degree: '', major: '', graduationDate: '' }]);

  const handleAddWorkExperience = () => {
    setWorkExperiences([...workExperiences, { company: '', role: '', years: '' }]);
  };

  const handleRemoveWorkExperience = (index) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    setEducationEntries([...educationEntries, { school: '', degree: '', major: '', graduationDate: '' }]);
  };

  const handleRemoveEducation = (index) => {
    setEducationEntries(educationEntries.filter((_, i) => i !== index));
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index][field] = value;
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducationEntries = [...educationEntries];
    updatedEducationEntries[index][field] = value;
    setEducationEntries(updatedEducationEntries);
  };

  return (
    
    <div className="ats-resumebuilder-container">
      <Helmet>
        <title>Advanced ATS Resume Builder</title>
      </Helmet>

      <div className="landing-page-depth2-frame0">
              <a href='/'>
                <img
                  alt="TeachersCabalLogog19019"
                  style={{ width: '100px', height: 'auto' }}
                  src="external/teacherscaballogog13414-vdvl-200h.png"
                  className="landing-page-teachers-cabal-logog1"
                />
              </a>
              <div className="landing-page-depth3-frame1">
                <div className="landing-page-depth4-frame01">
                  <a href='/teacherlogin' className="landing-page-depth5-frame01">
                    <span className="landing-page-text10">Find a Job</span>
                  </a>
                  <a href='/schoollogin' className="landing-page-depth5-frame11">
                    <span className="landing-page-text11">Post a Job</span>
                  </a>
                  <a href='/resuorcespage' className="landing-page-depth5-frame2">
                    <span className="landing-page-text12">Resources</span>
                  </a>
                  <a href='/about' className="landing-page-depth5-frame3">
                    <span className="landing-page-text13">About</span>
                  </a>
                </div>
                <div className="landing-page-depth4-frame11">
                  <div className="landing-page-depth5-frame02">
                    <a href='#' className="landing-page-depth6-frame01">
                      <span className="landing-page-text14">Log in</span>
                    </a>
                  </div>
                  <div className="landing-page-depth5-frame12">
                    <a href='#' className="landing-page-depth6-frame02">
                      <span className="landing-page-text15">Sign up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

      <div className="ats-resumebuilder-ats-resumebuilder">
        
        <h1 className="ats-resumebuilder-header">Advanced ATS Resume Builder</h1>
        <p className="ats-resumebuilder-description">
          Create your resume and download it in PDF format for free
        </p>

        {/* Basic Information */}
        <div className="ats-resumebuilder-section">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required placeholder='Jane Doe' />

          <label for="name">Email</label>
          <input type="text" id="email" name="email" required placeholder='janedoe@gmail.com' />

          <label for="name">Phone number</label>
          <input type="text" id="phone" name="phone" required placeholder='+234-123-456-7890' />

          <label for="name">age</label>
          <input type="number" id="age" name="age" required placeholder='21' min={0}/>

          <label for="name">address</label>
          <input type="text" id="address" name="address" required placeholder='12 Glover Road...'/>

          <label for="name">Professional Summary</label>
          <textarea type="text" id="summary" name="summary" placeholder="Write about yourself..." required></textarea>

          <label for="name">Field of study</label>
          <textarea type="text" id="qual" name="qual" required placeholder='Computer Science...' />

          <label for="name">Teaching Certifications</label>
          <textarea type="text" id="certificate" name="certificate" placeholder='Certification names and descriptions...'/>

          <label for="name">Teaching Certifications</label>
          <input type="file" id="certificateDoc" name="certificateDoc" placeholder='Upload relevant certification'/>

          <label for="name">Relevant Coursework/Development</label>
          <textarea type="text" id="coursedev" name="coursedev" required placeholder='Relevant coursework and projects...'/>

          <label for="name">Leadership/Mentorship Experience</label>
          <textarea type="text" id="leader" name="leader" placeholder='Write about any leadership or mentorship experience...'/>

          <label for="name">Subject(s) Area Expertise</label>
          <input type="text" id="subject" name="subject" required placeholder='Specify subject of specialization e.g. Mathematics...'/>

          <label for="name">Relevant Skills</label>
          <textarea type="text" id="skills" name="skills" placeholder="Your skills" required></textarea>

          <label for="name">profile picture</label>
          <input type="file" id="profilepic" name="profilepic" required />

          <label>Experience Level</label>
          <select>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>

          <label>Years of Experience</label>
          <select>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="0-1">0-1 years</option>
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        {/* Work Experiences */}
        <div className="ats-resumebuilder-section">
          <h2>Work Experience</h2>
          {workExperiences.map((work, index) => (
            <div key={index} className="work-experience-entry">
              <label>Company</label>
              <input
                type="text"
                placeholder="e.g. Google"
                value={work.company}
                onChange={(e) => handleWorkChange(index, 'company', e.target.value)}
              />

              <label>Role</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                value={work.role}
                onChange={(e) => handleWorkChange(index, 'role', e.target.value)}
              />

              <label>Years Worked</label>
              <input
                type="text"
                placeholder="e.g. 2018-2022"
                value={work.years}
                onChange={(e) => handleWorkChange(index, 'years', e.target.value)}
              />

              <button onClick={() => handleRemoveWorkExperience(index)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAddWorkExperience}>Add Work Experience</button>
        </div>

        {/* Education Section */}
        <div className="ats-resumebuilder-section">
          <h2>Education</h2>
          {educationEntries.map((education, index) => (
            <div key={index} className="education-entry">
              <label>School</label>
              <input
                type="text"
                placeholder="e.g. Stanford University"
                value={education.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
              />

              <label>Degree</label>
              <input
                type="text"
                placeholder="e.g. B.A."
                value={education.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              />

              <label>Major</label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                value={education.major}
                onChange={(e) => handleEducationChange(index, 'major', e.target.value)}
              />

              <label>Graduation Date</label>
              <input
                type="text"
                placeholder="e.g. May 2025"
                value={education.graduationDate}
                onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
              />

              <button onClick={() => handleRemoveEducation(index)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAddEducation}>Add Education</button>
        </div>

        {/* Submit Button */}
        <div className="ats-resumebuilder-section">
          <button className="ats-resumebuilder-submit">Create Resume</button>
        </div>
      </div>
    </div>
  );
};

export default ATSResumebuilder;
