import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { beauty_products } from "../../constants";
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
import { ProductCard } from "../Card";


export default function ProductBeauty() {
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    const handleOpen = (id) => {
        const findCurrentProduct = beauty_products.find(elem => elem.id === id)
        setCurrentData(findCurrentProduct)
        setOpen(!open)
    };

    return (
        <Card className="h-auto rounded-lg border w-full ">
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
                            beauty_products?.length ?
                                beauty_products?.map(
                                    ({ img, tag, title, id }, index) => {
                                        const classes = " border-b border-blue-gray-50 py-4  h-full";
                                        return (
                                            <tr className="h-full cursor-pointer" key={index} onClick={() => handleOpen(id)}>
                                                <td className={classes}>
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
                                                                {title}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-b border-blue-gray-50 ">

                                                    <Menu placement="bottom-end">
                                                        <MenuHandler>
                                                            <IconButton className="bg-transparent shadow-none focus:shadow-none">
                                                                <BsThreeDotsVertical className="h-4 w-4" color="black" />

                                                            </IconButton>
                                                        </MenuHandler>
                                                        <MenuList >
                                                            <MenuItem className="flex  gap-3"><CiEdit /> Edit</MenuItem>
                                                            <MenuItem className="flex  gap-3"><IoTrashOutline color="red" />Delete</MenuItem>
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