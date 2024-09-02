import React from 'react'
import CustomSideBar from '../components/CustomSideBar'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';
import CustomProductTable from '../components/CustomProductTable';
import CustomUserTable from '../components/CustomUserTable';
import ProductBeauty from '../components/ProductBeauty';
import { users } from '../constants';
import { IoAddSharp } from "react-icons/io5";
import { AddProduct } from '../components/AddProduct';
import BulkProduct from '../components/BulkProduct';
import EditProduct from '../components/EditProduct';


function DashboardRoute() {
  return (
    <Routes>
      <Route path="users" element={<CustomUserTable users={users} />} />
      <Route path="products" element={<CustomProductTable />} />
      <Route path="beauty-products" element={<ProductBeauty />} />
      <Route path="add-product/*" element={<AddProductRoutes />} />
    </Routes>
  );
}

function AddProductRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="bulk" element={<BulkProduct />} />
      <Route path="edit" element={<EditProduct />} />
    </Routes>
  );
}

const Main = () => {
  const location = useLocation(); // Get the current route

  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <main className='max-w-screen-2xl mx-auto'>
      <div className='grid grid-cols-12'>
        <div className='h-full hidden lg:block lg:col-span-4 xl:col-span-3'>
          <CustomSideBar />
        </div>
        <div className='flex-grow m-4 col-span-12 lg:col-span-8 xl:col-span-9'>
          <Typography
            variant="h3"
            className="font-bold leading-none capitalize text-gray-800 ps-4 my-4 flex justify-between">
            {lastSegment.replace(/[\/-]/g, ' ')}
            {
              lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'products' && (
                <Button className='flex items-center gap-1 p-2 bg-primary'>
                  <IoAddSharp size={24} className='m-0 p-0' />Add product
                </Button>
              )
            }
          </Typography>
          <DashboardRoute />
        </div>
      </div>
    </main>
  )
}

export default Main