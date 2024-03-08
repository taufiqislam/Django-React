import React, {Fragment, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap";
import DataContext from './Context/DataContext';

export const Sidebar = () => {
    const {showHome, setShowHome} = useContext(DataContext);
    const {showSyllabuses, setShowSyllabuses} = useContext(DataContext);
    const {showPrograms, setShowPrograms} = useContext(DataContext);
    const {showCourses, setShowCourses} = useContext(DataContext);

    const {showMission, setShowMission} = useContext(DataContext);
    const {showVision, setShowVision} = useContext(DataContext);
    const {showCurriculum, setShowCurriculum} = useContext(DataContext);
    const {showProgram, setShowProgram} = useContext(DataContext);
    const {showPeo, setShowPeo} = useContext(DataContext);
    const {showPeoMapMission, setShowPeoMapMission} = useContext(DataContext);
    const {showPlo, setShowPlo} = useContext(DataContext);
    const {showPloMapPeo, setShowPloMapPeo} = useContext(DataContext);
    const {showCourse, setShowCourse} = useContext(DataContext);
    const {showCourseInfo, setShowCourseInfo} = useContext(DataContext);
    const {showCourseObjective, setShowCourseObjective} = useContext(DataContext);
    const {showClo, setShowClo} = useContext(DataContext);
    const {showCloMapPlo, setShowCloMapPlo} = useContext(DataContext);
    const {showCloPloReasoning, setShowCloPloReasoning} = useContext(DataContext);
    const {showIlo, setShowIlo} = useContext(DataContext);
    const {showCourseContentOutline, setShowCourseContentOutline} = useContext(DataContext);
    const {showCourseAssessment, setShowCourseAssessment} = useContext(DataContext);
    const {showBookReference, setShowBookReference} = useContext(DataContext);

    const toggleHome = () => {
        if(showHome)
        {
            setShowHome(false);
        }
        else
        {
            setShowHome(true);
        }
    }

    const toggleProgram = () => {
        if(showPrograms)
        {
            setShowPrograms(false);
        }
        else
        {
            setShowPrograms(true);
        }
    }

    const toggleCourse= () => {
        if(showCourses)
        {
            setShowCourses(false);
        }
        else
        {
            setShowCourses(true);
        }
    }
    
  return (
   <Fragment>
       <div className="nameMain">
           <div className='infoDiv'>
               <img src="https://juniv.edu/storage/image/teacher/e5Og72xM6ziVhQm05xvu9rFVWOUTnsTih451EfgP.jpg" alt=""/>
               <h4>Dr. Abu Sayed Md. Mostafizur Rahaman</h4>
               <p>Professor</p>
               <p>Department Of Computer Science And Engineering</p>
           </div>
           <hr/>
           <ul className="" id="menu">
                <li className="nav-item">
                <Link to="/" className="nav-link">
                    <span>Home</span>
                </Link>
                </li>
                {showHome && showMission && (
                    <li className="nav-item">
                    <Link to='/mission' className="nav-link" >
                        <span>Mission</span>
                    </Link>
                    </li>
                )}
                {showHome && showVision && (
                    <li className="nav-item">
                    <Link to='/vision' className="nav-link">
                        <span>Vision</span>
                    </Link>
                    </li>
                )}
                {showHome && showCurriculum && (
                    <li className="nav-item">
                    <Link to='/curriculum' class="nav-link">
                        <span>Curriculum</span>
                    </Link>
                    </li>
                )}
                
                {showSyllabuses && showProgram && (
                    <li className="nav-item">
                    <Link to='/syllabus' className="nav-link">
                        <span>Program</span>
                    </Link>
                    </li>
                )}
                

                {showPrograms && showPeo && (
                    <li className="nav-item">
                    <Link to='/peo' className="nav-link">
                        <span>Program Educational Objectives (PEO)</span>
                    </Link>
                    </li>
                )}
                {showPrograms && showPeoMapMission && (
                     <li className="nav-item">
                     <Link to='/peomapmission' className="nav-link">
                         <span>Mapping Of PEO and Mission</span>
                     </Link>
                    </li>
                )}
                {showPrograms && showPlo && (
                    <li className="nav-item">
                    <Link to='/plo' className="nav-link">
                        <span>Program Learning Outcomes (PLO)</span>
                    </Link>
                    </li>
                )}

                {showPrograms && showPloMapPeo && (
                    <li className="nav-item">
                    <Link to='/plomappeo' className="nav-link">
                        <span>Mapping Of PLO and PEO</span>
                    </Link>
                    </li>
                )}
                {showPrograms && showCourse && (
                    <li className="nav-item">
                    <Link to='/course' className="nav-link">
                        <span>Courses</span>
                    </Link>
                    </li>
                )}
                

                {showCourses && showCourseInfo && (
                    <li className="nav-item">
                    <Link to='/courseinfo' className="nav-link">
                        <span>Course Information</span>
                    </Link>
                    </li>
                )}

                {showCourses && showCourseObjective && (
                    <li className="nav-item">
                    <Link to='/courseobjective' className="nav-link">
                        <span>Course Objectives</span>
                    </Link>
                    </li>
                )}

                {showCourses && showClo && (
                    <li className="nav-item">
                    <Link to='/clo' className="nav-link">
                        <span>Course Learning Outcomes (CLO)</span>
                    </Link>
                    </li>
                )}

                {showCourses && showCloMapPlo && (
                    <li className="nav-item">
                    <Link to='/clomapplo' className="nav-link">
                       <span>CLO-PLO Correlation Matrix</span>
                    </Link>
                    </li>
                )}

                {/* {showCloPloReasoning && (
                    <li className="nav-item">
                    <Link to='/cloPloReasoning' className="nav-link">
                        <span>CLO & PLO Reasoning</span>
                    </Link>
                    </li>
                )} */}

                {showCourses && showIlo && (
                    <li className="nav-item">
                    <Link to='/ilo' className="nav-link">
                        <span>Intended Learning Outcomes (ILO)</span>
                    </Link>
                    </li>
                )}

                {/* {showCourses && showCourseContentOutline && (
                    <li className="nav-item">
                    <Link to='/outline' className="nav-link">
                        <span>Course Content Outline</span>
                    </Link>
                    </li>
                )} */}
                {showCourses && showCourseAssessment && (
                    <li className="nav-item">
                    <Link to='/courseassessment' className="nav-link">
                        <span>Course Assessment</span>
                    </Link>
                    </li>
                )}
                
                {showCourses && showBookReference && (
                    <li className="nav-item">
                    <Link to='/bookreference' className="nav-link">
                        <span>Reference Books</span>
                    </Link>
                    </li>
                )}  

           </ul>
           <Button className="btn btn-danger logout">Logout</Button>
       </div>
   </Fragment>
  )
}
