import React from 'react';
import Auth from './page/Auth';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
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