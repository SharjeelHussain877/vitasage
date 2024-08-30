import React from 'react';
import Auth from './page/Auth';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import { Button, Input, Typography } from '@material-tailwind/react';
import  {Table} from '../src/components/Table'
import  {ProductCard} from '../src/components/Card'
import  {ProductBeauty} from '../src/components/ProductBeauty'
import {AddProduct} from './components/Products';
// import  Card from '../src/components/Card/card'
function Routing() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="*"
        element={
          <>
          <h1 className='text-center mt-[2rem] text-xl font-bold'>Error 404! PAGE NOT FOUND</h1>
          <div className='mx-auto w-full p-10'>
          <Table/>
          <ProductCard/>
          <ProductBeauty/>
          <AddProduct/>
         

          </div>
          </>
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
{/* <Input label="First Name" className=' rounded-b-none' icon={<i className="fas fa-heart" />} />
<Input label="Last Name" className=' rounded-t-none rounded-b-none' icon={<i className="fas fa-heart" />} />
<Input label="Email" className=' rounded-t-none' icon={<i className="fas fa-heart" />} /> */}