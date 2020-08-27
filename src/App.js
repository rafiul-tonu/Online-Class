import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Course from './Components/Course/Course';
import fakeData from './fakeData/CourseData'
import Cart from './Components/Cart/Cart'



function App() {
const first12 = fakeData.slice(0, 12);
// console.log(first12);
const [courses, setCourses] = useState(first12);
const [addCourses, setAddCourses] = useState([]);

const handleAddCourse = (course) => {
  
  const newCourse = [...addCourses, course];
  setAddCourses(newCourse);
}

  return (
    <div className="App">

      <div>
      <h2> Course: {courses.length} </h2>
      <Cart cart = {addCourses} ></Cart>

      
      {
        courses.map(course => <Course course={course} handleAddCourse={handleAddCourse} ></Course> )
      }
      </div>

    </div>
  );
}

export default App;
