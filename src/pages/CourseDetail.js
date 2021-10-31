import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCourseById } from '../api/course';

import CourseDetailItem from '../components/Courses/CourseDetailItem';

export default function CourseDetail() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      const data = await getCourseById(courseId, token);

      if (data.code !== 200) {
      } else {
        setCourse(data.data);
      }
    };

    sendRequest();
  }, [courseId, token]);
  return <CourseDetailItem course={course} />;
}
