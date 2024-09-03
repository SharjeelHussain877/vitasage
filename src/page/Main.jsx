import React from 'react'
import CustomSideBar from '../components/CustomSideBar'
import { Outlet, Route, Routes, useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';
import CustomProductTable from '../components/CustomProductTable';
import CustomUserTable from '../components/CustomUserTable';
import BeautyProducts from '../components/BeautyProducts';
import { users } from '../constants';
import { IoAddSharp } from "react-icons/io5";
import { AddProduct } from '../components/AddProduct';
import BulkProduct from '../components/BulkProduct';
import EditProduct from '../components/EditProduct';
import { MdKeyboardBackspace } from 'react-icons/md';


function DashboardRoute() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="users" element={<CustomUserTable users={users} />} />
      <Route path="products" element={<CustomProductTable />} />
      <Route path="beauty-products" element={<BeautyProducts />} />
      <Route path="add-product/*" element={<AddProductRoutes />} />
      <Route path="edit" element={<EditProduct />} />
    </Routes>
  );
}

function AddProductRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="bulk" element={<BulkProduct />} />
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
          {
            lastSegment.replace(/[\/-]/g, ' ') === "bulk" && (
              <Link to={'/dashboard/add-product'} >
                <p className='flex gap-1 text-md items-center cursor-pointer py-4'>
                  <MdKeyboardBackspace size={20} className='text-gray-500' /><span>Back</span>
                </p>
              </Link>
            )
          }
          {
            lastSegment.replace(/[\/-]/g, ' ') === "edit product" && (
              <Link to={'/dashboard/add-product'} >
                <p className='flex gap-1 text-md items-center cursor-pointer py-4'>
                  <MdKeyboardBackspace size={20} className='text-gray-500' /><span>Back</span>
                </p>
              </Link>
            )
          }

          <Typography
            variant="h3"
            className="font-bold leading-none capitalize text-gray-800 ps-4 my-4 flex justify-between">
            {lastSegment.replace(/[\/-]/g, ' ')}
            {
              lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'products' && (
                <Link to={'/dashboard/add-product'}>
                  <Button className='flex items-center gap-1 p-2 bg-primary'>
                    <IoAddSharp size={24} className='m-0 p-0' />Add product
                  </Button>
                </Link>
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