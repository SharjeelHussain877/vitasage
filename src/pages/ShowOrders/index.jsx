import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import OrderCard from '../../components/OrderCard'

//lg:ms-24 xl:ms-auto 
const ShowOrders = () => {
  return (
    <Card className='shadow-none'>
      <div className='lg:h-[90vh] p-4  flex flex-col lg:flex-row justify-between'>
        <div className='order-2 lg:order-1 mx-auto col-span-12 lg:col-span-8 p-4 max-w-full overflow-y-scroll scrollbar-w-small flex flex-col gap-2'>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className='order-1 flex-grow'>
          <Card className="w-auto min-w-80 max-w-96 lg:mx-auto">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Card>
  )
}

export default ShowOrders