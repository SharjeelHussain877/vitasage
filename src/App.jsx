import React from 'react';
import Auth from './page/Auth';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
// import { Table } from '../src/components/Table'
// import { ProductCard } from '../src/components/Card'
// import { ProductBeauty } from '../src/components/ProductBeauty'
// import { AddProduct } from './components/Products';
// import  Card from '../src/components/Card/card'
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
  return (
    <main>
      <Routing />
    </main>
  );
};

export default App;