import React from 'react';
import './Course.css'



const Course = (props) => {
  
  const {name, price} = props.course;
  
  const handleAddCourse = props.handleAddCourse;
  return (
    
     <div className="course-container">
     {
       <>
        <h3> Course Name: {name} </h3>
        <br/>
        <h5> Course price: {price} </h5>
        <br/>
        <button className="main-button" onClick={() =>handleAddCourse(props.course)}> Enroll Now </button>
        </>
     }
     </div>
  );
};

export default Course;