import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import OrderCard from '../../components/OrderCard'
import { cartItems } from '../../constants';
import { IoCartOutline } from "react-icons/io5";


//lg:ms-24 xl:ms-auto 
const ShowOrders = () => {
  const amount = cartItems.length && cartItems?.reduce((accumulator, currentElem) => accumulator + currentElem.salePrice, 0)
  const discount = amount && amount / 100 * 10
  const netSubTotal = amount - discount
  const shippingDetials = 8
  return (
    <Card className='shadow-none'>
      <CardBody>
        <div className='h-[90vh] flex flex-col md:flex-row justify-between gap-4'>
          <div className='order-2 lg:order-1 mx-auto col-span-12 lg:col-span-8 md:overflow-y-scroll scrollbar-w-small  flex flex-col gap-2 flex-grow flex-shrink'>
            {
              cartItems?.length && cartItems.map(elem => (
                <div key={elem.id}>
                  <OrderCard {...elem} />
                </div>
              ))
            }
          </div>
          <div className='order-1 mt-4 w-full lg:w-auto mx-auto'>
            <Card className="w-auto min-w-80 lg:mx-auto shadow-none border border-gray-300">
              <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-24 place-items-center bg-gradient-to-r from-primary-200 via-primary-500 to-primary"
              >
                <Typography variant="h3" color="white">
                  Order Summary
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Typography variant='h5' className='text-sm flex gap-2'>
                  <IoCartOutline size={20} /><p>{cartItems?.length} Item(s) in cart</p>
                </Typography>

                <hr />

                <Typography variant='small' className='text-sm flex gap-2 justify-between'>
                  <span className='capitalize'>Order sub total</span>
                  <span>${amount || "00"}</span>
                </Typography>

                <Typography variant='small' className='text-sm flex gap-2 justify-between'>
                  <span className='capitalize'>sale discount</span>
                  <span className='font-bold text-red-900'>- ${discount || "00"}</span>
                </Typography>

                <Typography variant='small' className='text-sm flex gap-2 justify-between'>
                  <span className='font-bold capitalize'>Net order sub total</span>
                  <span className='font-bold'>${netSubTotal || "00"}</span>
                </Typography>

                <Typography variant='small' className='text-sm flex gap-2 justify-between'>
                  <span className='capitalize'>shipping details</span>
                  <span>${shippingDetials || "00"}</span>
                </Typography>

                <Typography variant='small' className='text-sm flex gap-2 justify-between'>
                  <span className='font-bold capitalize'>Pre-Tax Total</span>
                  <span className='font-bold'>${netSubTotal + shippingDetials || "00"}</span>
                </Typography>

                <hr />

                <Typography variant='small' className='text-sm text-center font-bold  capitalize'>
                  Total Savings <span className='text-red-900'>${discount || '00'}</span>
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ShowOrders