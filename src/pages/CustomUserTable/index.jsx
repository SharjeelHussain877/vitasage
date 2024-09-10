import React, { useState } from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { LiaTimesSolid } from 'react-icons/lia';
import CustomUserDetailsCard from '../../components/CustomUserDetailsCard';

const TABLE_HEAD = ["name", "email", "subscription plan", "action"];


export default function CustomUserTable({ users }) {

    const [allUsers, setAllUsers] = useState(users || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [timeoutId, setTimeoutId] = React.useState(null);

    const handleOpen = (obj) => {
        setCurrentData(obj)
        setOpen(!open)
    };

    const handleChangeNextPage = () => {
        if (currentPage * rowsPerPage > allUsers.length) return
        setCurrentPage(currentPage + 1)
    }
    
    const handleChangePreviousPage = () => {
        if (currentPage <= 1) return
        setCurrentPage(currentPage - 1)
    }

    const displayedData = allUsers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    
  function filterByName(value) {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      const filteredData = users.filter(elem => elem.firstName.toLowerCase().includes(value.toLowerCase()) || elem.lastName.toLowerCase().includes(value.toLowerCase()));
      setAllUsers(filteredData);
    }, 400);

    setTimeoutId(newTimeoutId);
  }
    
    return (
        <Card className="w-full border min-h-screen">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-2">
                    <Input
                    onChange={(e) => filterByName(e.target.value)}
                        label="Search"
                        icon={<HiMiniMagnifyingGlass className="h-5 w-5" />}
                    />
                </div>
            </CardHeader>
            <CardBody className="px-0 lg:overflow-x-hidden w-full sm:min-w-full overflow-x-auto">
                <table className="mt-4 w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y min-w-32 border-blue-gray-100 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70 capitalize"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map(
                            ({ profile_image, firstName, lastName, email, subscriptionPlan, startDate, endDate,uid }, index) => {
                                const isLast = index === displayedData.length - 1;
                                const classes = isLast
                                    ? "p-3"
                                    : "p-3 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={profile_image} alt={firstName} size="sm" />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {`${firstName} ${lastName}`} 
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {email}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    className='!opacity-70'
                                                    variant="ghost"
                                                    size="sm"
                                                    value={subscriptionPlan}
                                                    color={subscriptionPlan === 'monthly' ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <IconButton variant="text" onClick={() => handleOpen({ profile_image, firstName, lastName, email, subscriptionPlan, startDate, endDate,uid })}>
                                                <MdOutlineRemoveRedEye className="h-4 w-4" />
                                            </IconButton>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {currentPage} of {rowsPerPage}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm" onClick={handleChangePreviousPage}>
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm" onClick={handleChangeNextPage}>
                        Next
                    </Button>
                </div>
            </CardFooter>
            <>
                <Dialog
                    open={open}
                    size="sm"
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                    className='relative'
                >
                    <LiaTimesSolid size={24} onClick={handleOpen} className='absolute right-3 top-2 z-10 cursor-pointer' />
                    <DialogBody>
                        < CustomUserDetailsCard {...currentData} />
                    </DialogBody>
                </Dialog>
            </>
        </Card>
    );
}