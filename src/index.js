import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import TeachersDashboardschools from './views/teachers-dashboardschools'
import HelpTeachers from './views/help-teachers'
import SchooldashboardApplicants from './views/schooldashboard-applicants'
import TeacherProfileInterviews from './views/teacher-profile-interviews'
import TeacherProfileOffers from './views/teacher-profile-offers'
import Resuorcespage from './views/resuorcespage'
import SchoolDashboardJobListing from './views/school-dashboard-job-listing'
import RecoveryPassword from './views/recovery-password'
import Schoolsignup from './views/schoolsignup'
import TeacherSignup from './views/teacher-signup'
import JobPostingSchool from './views/job-posting-school'
import Teacherapplicationpage from './views/teacherapplicationpage'
import TeachersProfileapplications from './views/teachers-profileapplications'
import Teacherlogin from './views/teacherlogin'
import Schooldashboardhires from './views/schooldashboardhires'
import Schoollogin from './views/schoollogin'
import LandingPage from './views/landing-page'
import JobDetailsTeacher from './views/job-details-teacher'
import TeachersDashboard from './views/teachers-dashboard'
import Schooldashboardoverview from './views/schooldashboardoverview'
import ATSResumebuilder from './views/ats-resumebuilder'
import NotFound from './views/not-found'
import ForgotPasswordSchool from './views/forgot-password-school'
import ForgotPasswordTeacher from './views/forgot-password-teacher'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={TeachersDashboardschools} exact path="/teachers-dashboardschools" />
        <Route component={HelpTeachers} exact path="/help-teachers" />
        <Route component={SchooldashboardApplicants} exact path="/schooldashboard-applicants" />
        <Route component={TeacherProfileInterviews} exact path="/teacher-profile-interviews" />
        <Route component={ForgotPasswordSchool} exact path="/forgot-password-school" />
        <Route component={ForgotPasswordTeacher} exact path="/forgot-password-teacher" />
        <Route component={TeacherProfileOffers} exact path="/teacher-profile-offers" />
        <Route component={Resuorcespage} exact path="/resuorcespage" />
        <Route component={SchoolDashboardJobListing} exact path="/school-dashboard-job-listing" />
        <Route component={RecoveryPassword} exact path="/recovery-password" />
        <Route component={Schoolsignup} exact path="/schoolsignup" />
        <Route component={TeacherSignup} exact path="/teacher-signup" />
        <Route component={JobPostingSchool} exact path="/job-posting-school" />
        <Route component={Teacherapplicationpage} exact path="/teacherapplicationpage" />
        <Route component={TeachersProfileapplications} exact path="/teachers-profileapplications" />
        <Route component={Teacherlogin} exact path="/teacherlogin" />
        <Route component={Schooldashboardhires} exact path="/schooldashboardhires" />
        <Route component={Schoollogin} exact path="/schoollogin" />
        <Route component={JobDetailsTeacher} exact path="/job-details-teacher" />
        <Route component={TeachersDashboard} exact path="/teachers-dashboard" />
        <Route component={Schooldashboardoverview} exact path="/schooldashboardoverview" />
        <Route component={ATSResumebuilder} exact path="/ats-resumebuilder" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))
