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
      <div className="ats-resumebuilder-ats-resumebuilder">
        <h1 className="ats-resumebuilder-header">Advanced ATS Resume Builder</h1>
        <p className="ats-resumebuilder-description">
          Create your resume and download it in PDF format for free
        </p>

        {/* Basic Information */}
        <div className="ats-resumebuilder-section">
          <label>Full Name</label>
          <input type="text" placeholder="e.g. Jane Doe" />

          <label>Job Title</label>
          <input type="text" placeholder="e.g. Software Engineer" />

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

          <label>Summary</label>
          <textarea placeholder="Write a short summary about yourself..." />
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
