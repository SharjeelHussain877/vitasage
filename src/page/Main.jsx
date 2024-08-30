import React from 'react'
// import CustomRightSidebar from '../components/CustomRightSidebar'
import CustomSideBar from '../components/CustomSideBar'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import CustomProductTable from '../components/CustomProductTable';
import CustomUserTable from '../components/CustomUserTable';
import { users } from '../constants';

function DashboardRoute() {
  return (
    <Routes>
      <Route path="users" element={<CustomUserTable users={users} />} />
      <Route path="products" element={<CustomProductTable users={users} />} />
    </Routes>
  );
}

const Main = () => {
  const location = useLocation(); // Get the current route
  const getHeading = () => {
    if (location.pathname.includes('users')) {
      return 'Users';
    } else if (location.pathname.includes('products')) {
      return 'Products';
    } else {
      return 'Dashboard';
    }
  };
  return (
    <main className='max-w-screen-2xl mx-auto'>
      <div className='flex'>
        <div>
          <CustomSideBar />
        </div>
        <div className='flex-grow m-4'>
          <Typography
            variant="h3"
            className="font-bold leading-none capitalize text-gray-800 ps-4 mt-4">
            {getHeading()}
          </Typography>
          <DashboardRoute />
        </div>
      </div>
    </main>
  )
}

export default Main