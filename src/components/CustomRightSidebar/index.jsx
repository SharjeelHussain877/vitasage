import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import CartItems from "../CartsProduct";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,

} from "@material-tailwind/react";

export default function CustomRightSidebar({ openDrawerRight, closeDrawerRight, openRight }) {

  return (
    <React.Fragment>
      <Drawer
        overlay={false}
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Cart Items
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="h-full w-full flex-2 flex flex-col">
          <div className="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden py-4 scrollbar-hide">
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          {/* absolute bottom-2 right-2 max-w-[17.5rem] w-full */}
          <div className="">
            <Card variant="gradient" className="w-full p-4 bg-primary">
              <CardBody className="p-0">
                <div className="flex items-center justify-between text-white">
                  <h1>Total Price</h1>
                  <h1>${200}</h1>
                </div>
                <div className="flex items-center justify-between text-white">
                  <h1>Tax</h1>
                  <h1>${2}</h1>
                </div>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Button
                  size="lg"
                  color="white"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                  ripple={false}
                  fullWidth={true}
                >
                  Check out
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
