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
    MenuItem,
    MenuList,
    MenuHandler,
    Menu,
} from "@material-tailwind/react";
import { LiaTimesSolid } from 'react-icons/lia';
import CustomUserDetailsCard from '../../components/CustomUserDetailsCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';
import { TbDotsVertical } from 'react-icons/tb';
import { GoTrash, GoTriangleDown } from 'react-icons/go';

const TABLE_HEAD = ["image", "name", "discription", "category", "quantity", "section", "sale price", "expiry"];


export default function Inventory({ products }) {

    const [allProducts, setAllProducts] = useState(products || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [timeoutId, setTimeoutId] = React.useState(null);

    const handleOpen = (id) => {
        const findCurrentUser = products.find(elem => elem.id === id)
        setCurrentData(findCurrentUser)
        setOpen(!open)
    };

    const handleChangeNextPage = () => {
        if (currentPage * rowsPerPage > allProducts.length) return
        setCurrentPage(currentPage + 1)
    }

    const handleChangePreviousPage = () => {
        if (currentPage <= 1) return
        setCurrentPage(currentPage - 1)
    }

    const displayedData = allProducts.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );


    function filterByName(value) {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
            const filteredData = products.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()));
            setAllProducts(filteredData);
        }, 400);

        setTimeoutId(newTimeoutId);
    }

    return (
        <Card className="w-full border min-h-screen">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-2">
                    <Input
                        type="text"
                        placeholder="type to search..."
                        onChange={(e) => filterByName(e.target.value)}
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        icon={<HiMiniMagnifyingGlass className="h-5 w-5" />}
                    />
                </div>
            </CardHeader>
            <CardBody className="px-0  w-full sm:min-w-full overflow-x-auto">
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
                        {allProducts && displayedData.map(
                            ({ img, name, description, tag, unit, section, salePrice, date, id }, index) => {
                                const isLast = index === displayedData.length - 1;
                                const classes = isLast
                                    ? "p-1 ps-4"
                                    : "p-1 ps-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index} onClick={() => handleOpen(id)}>
                                        <td className={classes}>
                                            <Avatar src={img} alt={name} size="md" />

                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal line-clamp-2"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal line-clamp-2"
                                            >
                                                {tag}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal line-clamp-2"
                                            >
                                                {unit}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal line-clamp-2"
                                            >
                                                {section || "no section"}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal line-clamp-2"
                                                >
                                                    {salePrice}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal line-clamp-2"
                                                >
                                                    {date}
                                                </Typography>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-end pt-0">
                <Menu placement="bottom-end">
                    <MenuHandler>
                        <Button className='bg-transparent shadow-none hover:shadow-none normal-case text-gray-700 flex items-center gap-3' >
                            Rows per page {rowsPerPage}
                            <GoTriangleDown size={18} />
                        </Button>
                    </MenuHandler>
                    <MenuList className='p-2'>
                        <MenuItem onClick={() => setRowsPerPage(10)}>10</MenuItem>
                        <MenuItem onClick={() => setRowsPerPage(20)}>20</MenuItem>
                    </MenuList>
                </Menu>
                <IconButton variant="outlined" size="sm" className='border-none' onClick={handleChangePreviousPage}>
                    <IoIosArrowBack />
                </IconButton>
                <IconButton variant="outlined" size="sm" className='border-none' onClick={handleChangeNextPage}>
                    <IoIosArrowForward />
                </IconButton>
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
                        <h1>The data will be show in form here....</h1>
                        {/* < CustomUserDetailsCard {...currentData} /> */}
                    </DialogBody>
                </Dialog>
            </>
        </Card>
    );
}