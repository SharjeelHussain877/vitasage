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
import CustomRightSidebar from '../components/CustomRightSidebar';
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';


function DashboardRoute() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="users" element={<CustomUserTable users={users} />} />
      <Route path="inventory" element={<CustomProductTable />} />
      <Route path="products" element={<CustomProductTable />} />
      <Route path="customers" element={<CustomUserTable users={users} />} />
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
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [openRight, setOpenRight] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const handleDrawerToggle = () => setShowDrawer(!showDrawer);

  const handleGoBack = () => navigate(-1);
  return (
    // max-w-screen-2xl
    <main className='mx-auto'>
      <div className='flex'>
        <div className={`h-full fixed flex lg:relative z-10 lg:block  w-[300px] xl:w-[280px] transition-all duration-300 ease-in-out lg:left-0 ${showDrawer ? 'left-0' : "left-[-290px]"}`}>
          <CustomSideBar />
          <RxCross1 size={24} className='z-40 lg:hidden absolute right-2 top-4' onClick={handleDrawerToggle} />
        </div>
        <div className='flex-grow m-4'>
          {
            lastSegment.replace(/[\/-]/g, ' ') === "bulk" && (
              <Button onClick={handleGoBack} className='bg-transparent text-gray-500 flex items-center gap-2 !shadow-none'>
                <MdKeyboardBackspace size={20} /><span>Back</span>
              </Button>
            )
          }
          {
            lastSegment.replace(/[\/-]/g, ' ') === "edit" && (
              <Button onClick={handleGoBack} className='bg-transparent text-gray-500 flex items-center gap-2 !shadow-none'>
                <MdKeyboardBackspace size={20} /><span>Back</span>
              </Button>
            )
          }
          <div className='ps-4 my-4 flex justify-between'>
            <Typography
              variant="h3"
              className="font-bold leading-none capitalize text-gray-800 flex gap-2 items-center">
              <GiHamburgerMenu className='lg:hidden' onClick={handleDrawerToggle} />
              {lastSegment.replace(/[\/-]/g, ' ')}
            </Typography>

            <div className='flex flex-wrap items-center gap-2'>
              {
                lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'products' && (
                  <Link to={'/dashboard/add-product'}>
                    <Button className='flex items-center gap-1 p-2 bg-primary'>
                      <IoAddSharp size={24} className='m-0 p-0' />Add product
                    </Button>
                  </Link>
                )
              }
              <Button onClick={openDrawerRight} className='flex items-center gap-1 bg-primary'><BsCart size={18} className='m-0 p-0' />Cart</Button>
            </div>
          </div>
          <DashboardRoute />
        </div>
        <div>
          <CustomRightSidebar openDrawerRight={openDrawerRight} closeDrawerRight={closeDrawerRight} openRight={openRight} />
        </div>
      </div>
    </main>
  )
}

export default Main