import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>A Wide range of our courses</h2>
          <p>Explore variety of courses, Guided Projects, Specializations and Professional Certificates with new content added regularly.</p>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList