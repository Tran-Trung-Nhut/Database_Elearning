'use client';

import { useState } from 'react';

interface Course {
  id: number;
  courseName: string;
  language: string;
  description: string;
  price: string;
  averageQuizScore: string;
  topics: string[];
  createdAt: string;
}

const ManageCourses = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      courseName: 'Introduction to Vietnamese',
      language: 'Vietnamese',
      description: 'Learn the basics of Vietnamese language.',
      price: '50',
      averageQuizScore: '75',
      topics: ['Language', 'Basics', 'Culture'],
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      courseName: 'Advanced English Grammar',
      language: 'English',
      description: 'Deep dive into advanced English grammar rules.',
      price: '100',
      averageQuizScore: '85',
      topics: ['Grammar', 'Advanced', 'Writing'],
      createdAt: new Date().toLocaleString(),
    },
  ]);

  const handleDeleteCourse = (id: number) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div className="manage-courses-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="rounded-lg mt-10 text-center text-2xl/9 font-bold tracking-tight text-white bg-hcmutDarkBlue">
            Manage Courses
          </h2>

      {courses.length > 0 ? (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Language</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price (coins)</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Created At</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.courseName}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.language}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.createdAt}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    style={{
                      background: 'red',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: '20px' }}>No courses created yet.</p>
      )}
    </div>
  );
};

export default ManageCourses;
