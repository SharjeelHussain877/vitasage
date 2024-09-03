import React from 'react';
import Auth from './page/Auth';
import Main from './page/Main';
import { Route, Routes, Navigate } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={true ? "/dashboard/users" : "/auth/sign-in"} />} />
      <Route path="/dashboard/*" element={<Main />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="*"
        element={
          <h1 className='text-center mt-[2rem] text-xl font-bold'>Error 404! PAGE NOT FOUND</h1>
        }
      />
    </Routes>
  );
}

const App = () => {
  return <Routing />
};

export default App;