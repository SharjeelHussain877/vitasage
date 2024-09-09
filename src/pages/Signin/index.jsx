import React, { useState } from 'react';
import {
    Input,
    Card,
    Button,
    Typography,
    Radio,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" className='text-gray-900 lg:text-gray-800'>
                Sign In
            </Typography>
            <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className='mb-4 ml-[-8px] flex flex-col'>
                    <Radio
                        name="type"
                        label={
                            <Typography
                                color="blue-gray"
                                className="flex font-medium text-blue-gray-600"
                            >
                                Sign in as a super admin
                            </Typography>
                        }
                    />
                    <Radio
                        name="type"
                        label={
                            <Typography
                                color="blue-gray"
                                className="flex font-medium text-blue-gray-600"
                            >
                                Sign in as an admin
                            </Typography>
                        }
                    />
                    <Radio
                        name="type"
                        label={
                            <Typography
                                color="blue-gray"
                                className="flex font-medium text-blue-gray-600"
                            >
                                Sign in as an operator
                            </Typography>
                        }
                    />
                </div>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" className="-mb-6 text-gray-800">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="example@gmail.com"
                        className="text-gray-900 border-t-gray-800 focus:!border-gray-800 lg:focus:!border-primary placeholder:text-gray-600"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" className="-mb-6 text-gray-800">
                        Password
                    </Typography>
                    <div className="relative">
                        <Input
                            maxLength={30}
                            size="lg"
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            className="text-gray-900 border-t-gray-800 focus:!border-gray-800 lg:focus:!border-primary placeholder:text-gray-600"
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
                <Button className="mt-6 bg-primary tracking-wide normal-case	" fullWidth>
                    Log in
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don’t have an account?{" "}
                    <NavLink to="/auth/sign-up" className="font-semibold text-gray-900 hover:underline">
                        Sign Up
                    </NavLink>
                </Typography>
            </form>
        </Card>
    );
}

export default SignIn;
