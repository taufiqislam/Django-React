import React, {useState,useEffect, useContext} from 'react'
import { CourseObjectiveForm } from './CourseObjectiveForm'
import {v4 as uuidv4} from 'uuid'
import { CourseObjective } from './CourseObjective'
import { EditCourseObjectiveForm } from './EditCourseObjectiveForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import axios from 'axios';
import DataContext from './Context/DataContext';
uuidv4()

export const CourseObjectiveWrapper = () => {

    const [courseObjectives, setCourseObjectives] = useState([])
    const {upCurriculums} = useContext(DataContext);
    const {upSyllabuses} = useContext(DataContext);
    const {upCourses} = useContext(DataContext);
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/CO/?upCourse=${upCourses.id}`)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length > 0) {
              setCourseObjectives(res.data);
            }
          } else {
            console.error("Failed to fetch data from the server");
          }
        })
        .catch(() => {
          console.error("Something went wrong");
        });
    }, []);
    const addCourseObjective = (description) => {
    
      const requestData = {
        upCourse : upCourses.id,
        description:description,
        isEditing: false
      };
      
      axios
        .post('http://127.0.0.1:8000/api/CO/', requestData)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setCourseObjectives(prevcourseObjectives => [...prevcourseObjectives, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    const deleteCourseObjective = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/CO/${id}/`)
          .then(() => {
              const newcourseObjectives = courseObjectives.filter(t => {
                  return t.id !== id
              });
              setCourseObjectives(newcourseObjectives);
          }).catch(() => {
              alert("Something went wrong");
          })
  }
      const editCourseObjective = id => {
        setCourseObjectives(courseObjectives.map(courseObjective => courseObjective.id === id ? {...courseObjective, isEditing: !courseObjective.isEditing} : courseObjective))
      }
      const editDescriptionCourseObjective = (description,  id) => {
    const requestData = {
      upCourse : upCourses.id,
      description: description,
    };
  
    axios
      .put(`http://127.0.0.1:8000/api/CO/${id}/`, requestData)
      .then((response) => {
        // Handle the response if needed
        setCourseObjectives(prevcourseObjectives =>
          prevcourseObjectives.map(courseObjective =>
            courseObjective.id === id
              ? { ...courseObjective, description,   isEditing: !courseObjective.isEditing }
              : courseObjective
          )
        );
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isComplete = () => {
    return courseObjectives.length !== 0;
  }; 
  return (
    <div className='Wrapper' id='courseobjective'>
      <div className='row'>
          <div className='col-4 Heading1'>
          <p>Curriculum: {upCurriculums.starting} - {upCurriculums.ending}</p>
          <p>Program: {upSyllabuses.program} {upSyllabuses.selectedOption} {upSyllabuses.yearValue} {upSyllabuses.semesterValue} {upSyllabuses.session}</p>
          <p>Course: {upCourses.code}</p>
          </div>
          <div className='col-4 Heading2'>
           <h2>Course Objectives(CO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <CourseObjectiveForm addCourseObjective={addCourseObjective}/>
        <table className='table table-bordered table-hover border-dark text-center'>
          <thead>
            <tr>
              <th>CO ID</th>
              <th>CO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courseObjectives.map((courseObjective, index) => (
              
              courseObjective.isEditing ? (
                <EditCourseObjectiveForm editCourseObjective={editDescriptionCourseObjective} description={courseObjective}/>
              ) : (
                <CourseObjective description={courseObjective} key={courseObjective.id} index={index} deleteCourseObjective={deleteCourseObjective} editCourseObjective={editCourseObjective}/>
                )))
                
            }
          </tbody>
        </table>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/course'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                  to={isComplete() ? '/clo' : '#'}
                  onClick={(e) => {
                      if (!isComplete()) {
                          e.preventDefault();
                          alert("Please add at least one Course Objective.");
                      }
                  }}
              >
                  <button
                      type='button'
                      className={`form-btn btn ${isComplete() ? '' : 'disabled'}`}
                  >
                      Next
                  </button>
              </Link>
              
              
            </div>
        </div>
       
    </div>
  )
}
