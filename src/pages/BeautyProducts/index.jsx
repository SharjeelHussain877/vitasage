import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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
    CardHeader,
} from "@material-tailwind/react";
import NoData from "../NoData";
import { LiaTimesSolid } from "react-icons/lia";
import { ProductCard } from "./../../components/Card";
import { Link } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


export default function BeautyProducts() {
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [beautyProducts, setBeautyProducts] = useState(products.filter(elem => elem.categoryId == 1) || []);
    const [timeoutId, setTimeoutId] = React.useState(null);

    const handleOpen = (id) => {
        const findCurrentProduct = products.find(elem => elem.id === id)
        setCurrentData(findCurrentProduct)
        setOpen(!open)
    };

    function filterByName(value) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        const filteredData = products.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()) && elem.categoryId === 1);
        setBeautyProducts(filteredData);
      }, 400);
  
      setTimeoutId(newTimeoutId);
    }
    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-2">
                    <Input
                        onChange={(e) => filterByName(e.target.value)}
                        label="Search"
                        icon={<HiMiniMagnifyingGlass className="h-5 w-5" />}
                    />
                </div>
            </CardHeader>
            <CardBody >

                <table className="w-full table-auto">
                    <tbody>
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