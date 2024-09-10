import React, { Suspense, lazy } from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import CustomSpinner from '../components/Loader';
import svg from './../assets/icon.svg'
import { Typography } from '@material-tailwind/react';
import InternetConnectionStatus from '../components/InternetConnectionStatus';

const SignIn = lazy(() => import('../pages/Signin'));
const SignUp = lazy(() => import('../pages/Signup'));

function FormRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="*"
        element={<Navigate to="sign-in" />}
      />
    </Routes>
  );
}

const Auth = () => {
  let online = navigator.onLine;
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Sending query parameters to the sign-in page
    navigate('/auth/sign-in?role=developer');
  };
  return (
    <Suspense fallback={<div className='h-screen w-full flex items-center justify-center'><CustomSpinner /></div>}>
      {
        online && <InternetConnectionStatus />
      }
      <section className='h-screen w-full grid grid-cols-1 lg:grid-cols-5 mx-auto relative'>
        <div className='col-span-3 bg-primary flex justify-center items-center bg-opacity-5 lg:bg-opacity-100'>
          <img src={svg} className='z-10 bg-white rounded-full w-auto max-w-80 min-w-64 opacity-30 lg:opacity-100 ' />
          <div className='block lg:hidden absolute z-10'>
            <FormRoute />
            
          </div>
          <Typography onClick={handleSignIn} color="gray" className="block lg:hidden mt-4 text-center font-normal text-sm absolute bottom-4 select-none underline cursor-pointer hover:text-black">
            Sign in as a developer
          </Typography>
        </div>
        <div className='col-span-2 hidden lg:flex justify-center items-center flex-col gap-4 mx-4'>
          <FormRoute />
          <Typography onClick={handleSignIn} color="gray" className="mt-4 text-center font-normal text-sm absolute bottom-4 select-none underline cursor-pointer hover:text-black">
            Sign in as a developer
          </Typography>
        </div>
      </section>
    </Suspense>
  )
}

export default Auth