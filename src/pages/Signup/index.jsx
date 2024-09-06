import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-6 text-gray-200 lg:text-gray-800">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="john smith"
            className="text-gray-200 lg:text-gray-900 border-t-blue-gray-200 focus:backdrop-blur-md focus:!border-blue-gray-100 lg:focus:!border-primary placeholder:text-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-6 text-gray-200 lg:text-gray-800">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="example@gmail.com"
            className="text-gray-200 lg:text-gray-900 border-t-blue-gray-200 focus:backdrop-blur-md focus:!border-blue-gray-100 lg:focus:!border-primary placeholder:text-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-6 text-gray-200 lg:text-gray-800">
            Password
          </Typography>
          <div className="relative">
            <Input
              maxLength={30}
              size="lg"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="text-gray-200 lg:text-gray-900 border-t-blue-gray-200 focus:backdrop-blur-md focus:!border-blue-gray-100 lg:focus:!border-primary placeholder:text-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
            >
              {showPassword ? (
                <FaRegEyeSlash className="h-5 w-5 text-gray-100 lgtext-gray-500" />
              ) : (
                <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-100 lg:text-gray-500" />
              )}
            </button>
          </div>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 bg-primary tracking-wide normal-case	" fullWidth>
          Sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <NavLink to="/auth/sign-in" className="font-medium text-gray-900 hover:underline">
            Sign In
          </NavLink>
        </Typography>
      </form>
    </Card>
  );
}

export default SignUp