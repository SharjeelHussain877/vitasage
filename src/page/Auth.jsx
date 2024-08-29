import React, { Suspense, lazy } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import CustomSpinner from '../components/Loader';
import { Navigate } from 'react-router-dom';
import svg from './../assets/icon.svg'

const SignIn = lazy(() => import('../components/signin'));
const SignUp = lazy(() => import('../components/signup'));

function FormRoute() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

const Auth = () => {
  let online = navigator.onLine;

  return (
    <Suspense fallback={<div className='h-screen w-full flex items-center justify-center'><CustomSpinner /></div>}>
      <section className='h-screen w-full grid grid-cols-1 lg:grid-cols-5 mx-auto relative'>
        <div className='col-span-3 bg-primary flex justify-center items-center'>
          <img src={svg} className='z-10 bg-white rounded-full w-auto max-w-80 min-w-64 opacity-30 lg:opacity-100 ' />
          <div className='block lg:hidden absolute z-10'>
            <FormRoute />
          </div>
        </div>
        <div className='col-span-2  hidden lg:flex justify-center items-center flex-col gap-4 mx-4'>
          <FormRoute />
        </div>
      </section>
    </Suspense>
  )
}

export default Auth