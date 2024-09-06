import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { products } from "../../constants";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import {
    Card,
    Input,
    Typography,
    CardBody,
    Menu,
    MenuList,
    MenuItem,
    Avatar,
    MenuHandler,
    IconButton,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import NoData from "../NoData";
import { LiaTimesSolid } from "react-icons/lia";
import { ProductCard } from "./../../components/Card";
import { Link } from "react-router-dom";


export default function BeautyProducts() {
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [beautyProducts, setBeautyProducts] = useState(products.length && products.filter(elem => elem.categoryId == 1));

    const handleOpen = (id) => {
        const findCurrentProduct = products.find(elem => elem.id === id)
        setCurrentData(findCurrentProduct)
        setOpen(!open)
    };

    return (
        <Card className="min-h-screen rounded-lg border w-full">
            <CardBody >
                <Input
                    placeholder="Search Products"
                    className="!border !border-gray-300 w-full  bg-white text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 "
                    icon={<CiSearch size={20} />}
                    labelProps={{
                        className: "hidden",
                    }}
                />

                <table className=" w-full  table-auto my-5  ">
                    <tbody className=" ">
                        {
                            beautyProducts?.length ?
                                beautyProducts?.map(
                                    ({ img, tag, name, id }, index) => {
                                        const classes = " border-b border-blue-gray-50 py-4  h-full";
                                        return (
                                            <tr className="h-full cursor-pointer" key={index}>
                                                <td className={classes} onClick={() => handleOpen(id)}>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar src={img} className="h-16  w-16" variant="rounded" alt="product" />
                                                        <div className="flex flex-col">
                                                            <Typography variant="small" color="blue-gray">
                                                                <span className="bg-[#EEEEEF] text-[#212636] p-2  rounded-lg">
                                                                    {tag}
                                                                </span>
                                                            </Typography>
                                                            <Typography
                                                                // variant="h5"
                                                                color="blue-gray"
                                                                className="opacity-1 pt-2 lg:font-bold  font-normal text-[#212636]"
                                                            >
                                                                {name}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-b border-blue-gray-50 z-10 max-w-2">
                                                    <Menu placement="bottom-end">
                                                        <MenuHandler>
                                                            <IconButton className="bg-transparent shadow-none focus:shadow-none">
                                                                <BsThreeDotsVertical className="h-4 w-4" color="black" />
                                                            </IconButton>
                                                        </MenuHandler>
                                                        <MenuList >
                                                            <Link to={`/dashboard/edit?id=${id}`}>
                                                                <MenuItem className='flex items-center gap-2 capitalize tracking-wide'>
                                                                    <CiEdit size={20} />edit
                                                                </MenuItem>
                                                            </Link>
                                                            <MenuItem className="flex gap-3"><IoTrashOutline color="red" />Delete</MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                            </tr>
                                        );
                                    },
                                ) : (<NoData />)
                        }
                    </tbody>
                </table>
            </CardBody>
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
                        <ProductCard {...currentData} />
                    </DialogBody>
                </Dialog>
            </>

        </Card>
    );
}