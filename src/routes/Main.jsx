import React from 'react'
import { Route, Routes, useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Typography } from '@material-tailwind/react';
import { CreateCategory } from '../pages/CreateCategory';
import { IoAddSharp } from "react-icons/io5";
import { AddProduct } from '../pages/AddProduct';
import { RxCross1 } from 'react-icons/rx';
import { BsCart } from "react-icons/bs";
import { users } from '../constants';
import EditProduct from '../pages/EditProduct';
import BulkProduct from '../pages/BulkProduct';
import CustomSideBar from '../components/CustomSideBar'
import BeautyProducts from '../pages/BeautyProducts';
import CustomUserTable from '../pages/CustomUserTable';
import CustomRightSidebar from '../components/CustomRightSidebar';
import CustomProductTable from '../pages/CustomProductTable';
import Suppliers from '../pages/Suppliers';
import Categories from '../pages/Categories';
import AddSuplier from '../pages/AddSupplier';
import ShowOrders from '../pages/ShowOrders';
import PlaceOrders from '../pages/PlaceOrders';
import PurchaseOrder from '../pages/PurchaseOrder';
import SupplierDevliveries from '../pages/SupplierDeliveries';


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
      <Route path="show-orders" element={<ShowOrders />} />
      <Route path="categories" element={<Categories />} />
      <Route path="category/create" element={<CreateCategory />} />
      <Route path="place-orders" element={<PlaceOrders />} />
      <Route path="suppliers" element={<Suppliers users={users} />} />
      <Route path="add-supliers" element={<AddSuplier />} />
      <Route path="category/purchase-order" element={<PurchaseOrder />} />
      <Route path="supplier-deliveries" element={<SupplierDevliveries />} />
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
        <div className={`h-full hidden lg:block z-10 w-[300px] xl:w-[280px] transition-all duration-300 ease-in-out lg:left-0 ${showDrawer ? 'left-0' : "left-[-290px]"}`}>
          <CustomSideBar handleDrawerToggle={handleDrawerToggle} />
          <RxCross1 size={24} className='z-40 lg:hidden absolute right-2 top-4 cursor-pointer' onClick={handleDrawerToggle} />
        </div>
        <div className='flex-grow lg:ms-24 xl:m-4'>
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
              variant="h3"
              className="font-bold leading-none capitalize text-gray-800 flex gap-2 items-center">
              <GiHamburgerMenu className='lg:hidden cursor-pointer' onClick={handleDrawerToggle} />
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
              {
                lastSegment.replace(/[\/-]/g, ' ').toLocaleLowerCase().trim() === 'order' && (
                  <Button onClick={openDrawerRight} className='flex items-center gap-1 bg-primary'><BsCart size={18} className='m-0 p-0' />Cart</Button>
                )
              }
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