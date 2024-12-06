'use client';

import Header from './teacher_components/header';
import Sidebar from './teacher_components/sidebar';
import CoursesContent from './teacher_components/courses';
import ChartContent from './teacher_components/chart';
import { useRecoilState } from 'recoil';
import { userLoginState } from '@/state';
import { useEffect } from 'react';


const data = {
  labels: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  datasets: [
    {
      label: 'Enrolled Students',
      data: [25, 30, 28, 35, 40, 55, 50, 70, 80, 90, 95, 110],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      pointBorderColor: 'blue',
      pointBackgroundColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 5,
      fill: true,
      tension: 0.4, // Smooth curve
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of Students',
      },
    },
  },
};


const DashBoard = () => {
  const [userLogin, setUserLogin] = useRecoilState(userLoginState)

  useEffect(() => {
    const userFromSessionRaw = sessionStorage.getItem('userLogin')
    if(!userFromSessionRaw) return
    setUserLogin(JSON.parse(userFromSessionRaw))  
  }, [])

  return (
    <div className="bg-black">
      <div className="grid grid-cols-12 grid-rows-12 min-h-screen gap-4">
        {Header(userLogin.lastName + ' ' + userLogin.firstName)}
        {Sidebar(userLogin.firstName, userLogin.lastName)}
        {CoursesContent(userLogin.id)}
        {/* <ChartContent data={data} options={options} category="line" /> */}
      </div>
    </div>
  );
};

export default DashBoard;
