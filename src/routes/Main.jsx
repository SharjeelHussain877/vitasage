import React from 'react'
import { Route, Routes, useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { MdAdd, MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@material-tailwind/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { BsCart } from "react-icons/bs";
import Suppliers from '../pages/Suppliers';
import PlaceOrders from '../pages/PlaceOrders';
import Categories from '../pages/Categories';
import AddSuplier from '../pages/AddSupplier';
import { users, products } from '../constants';
import EditProduct from '../pages/EditProduct';
import BulkProduct from '../pages/BulkProduct';
import { AddProduct } from '../pages/AddProduct';
import BeautyProducts from '../pages/BeautyProducts';
import CreateCustomer from '../pages/CreateCustomer';
import CustomUserTable from '../pages/CustomUserTable';
import CustomSideBar from '../components/CustomSideBar'
import CustomRightSidebar from '../components/CustomRightSidebar';
import SupplierDevliveries from '../pages/SupplierDeliveries';
import CustomProductTable from '../pages/CustomProductTable';
import CreateCategory from '../pages/CreateCategory';
import PurchaseOrder from '../pages/PurchaseOrder';
import InternetConnectionStatus from '../components/InternetConnectionStatus';
import Inventry from '../pages/Inventry';
import AllCutomerWithOrderedProducts from '../pages/ShowOrders';

function DashboardRoute() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="users" element={<CustomUserTable users={users} />} />
      <Route path="inventory" element={<Inventry products={products} />} />
      <Route path="customers" element={<CustomUserTable users={users} />} />
      <Route path="products" element={<CustomProductTable />} />
      <Route path="add-product/*" element={<AddProductRoutes />} />
      <Route path="beauty-products" element={<BeautyProducts />} />
      <Route path="products/edit" element={<EditProduct />} />
      <Route path="create-category" element={<CreateCategory />} />
      <Route path="categories" element={<Categories />} />
      <Route path="show-orders" element={<AllCutomerWithOrderedProducts />} />
      <Route path="place-order" element={<PlaceOrders />} />
      <Route path="create-customer" element={<CreateCustomer />} />
      <Route path="suppliers" element={<Suppliers users={users} />} />
      <Route path="add-supliers" element={<AddSuplier />} />
      <Route path="category/purchase-order" element={<PurchaseOrder />} />
      <Route path="supplier-deliveries" element={<SupplierDevliveries />} />
      <Route
        path="*"
        element={<Navigate to="users" />}
      />
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
  const [showDrawer, setShowDrawer] = React.useState(true);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const handleDrawerToggle = () => setShowDrawer(!showDrawer);

  const handleGoBack = () => navigate(-1);

  const isOnline = navigator.onLine

  return (
    // max-w-screen-2xl
    <main className='md:max-h-[100vh] overflow-hidden bg-gray-200'>
      {
        isOnline && <InternetConnectionStatus />
      }
      <div className='flex'>
        <div className={`h-[100vh] fixed z-10 block lg:hidden transition-all duration-300 ease-in-out lg:left-0 ${showDrawer ? 'left-0' : "left-[-290px]"}`}>
          <CustomSideBar handleDrawerToggle={handleDrawerToggle} />
          <RxCross1 size={24} className='z-40 lg:hidden absolute right-2 top-4 cursor-pointer text-white' onClick={handleDrawerToggle} />
        </div>
        <div className={`h-[100vh] hidden lg:block lg:col-span-3 xl:col-span-2 z-10 transition-all duration-300 ease-in-out lg:left-0 ${showDrawer ? 'left-0' : "left-[-290px]"}`}>
          <CustomSideBar handleDrawerToggle={handleDrawerToggle} />
        </div>
        <div className='xl:p-4 flex-grow flex-shrink xl:col-span-10 max-h-screen overflow-scroll scrollbar-hide'>
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
          <div className='px-4 my-4 flex justify-between'>
            <Typography
              variant="h4"
              className="leading-none capitalize text-gray-800 flex gap-2 items-center">
              <GiHamburgerMenu className='lg:hidden cursor-pointer' onClick={handleDrawerToggle} />
              {lastSegment.replace(/[\/-]/g, ' ')}
            </Typography>

            <div className='flex flex-wrap items-center gap-2 flex-shrink-0'>
              {
                lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'products' && (
                  <Link to={'/dashboard/add-product'} className='flex items-center gap-1 px-[8px] py-[4px] bg-primary normal-case shadow-none hover:shadow-none rounded-lg text-sm text-white'>
                    <MdAdd size={18} className='m-0 p-0' />Add product
                  </Link>
                )
              }
              {
                false && (
                  <Link to={'#'} onClick={openDrawerRight} className='flex items-center gap-1 px-[8px] py-[4px] bg-primary normal-case shadow-none hover:shadow-none rounded-lg text-sm text-white'>
                    <BsCart size={18} className='m-0 p-0' />Cart
                  </Link>
                )
              }
              {
                lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'customers' && (
                  <Link to={'/dashboard/create-customer'} className='flex items-center gap-1 px-[8px] py-[4px] bg-primary normal-case shadow-none hover:shadow-none rounded-lg text-sm text-white'>
                    Create customer
                  </Link>
                )
              }
              <Link to={'/dashboard/place-order'} className='flex items-center gap-1 px-[8px] py-[4px] bg-primary normal-case shadow-none hover:shadow-none rounded-lg text-sm text-white'>
                Place order
              </Link>
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