import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCourses } from '../api/course';

import CourseList from '../components/Courses/CourseList';

export default function Courses() {
  const { token } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const data = await getCourses(token);

      if (data.code !== 200) {
      } else {
        setCourses(data.data);
      }
    };

    sendRequest();
  }, [token]);
  return <CourseList courses={courses} />;
}
