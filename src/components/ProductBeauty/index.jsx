import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import product1 from './../../assets/product1.webp'
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
} from "@material-tailwind/react";

const TABLE_ROWS = [
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },
    {
        img: product1,
        brand: "Aveeno",
        productName: "Mild Cherry Blossom Eye Cream Skin Care",
    },

];

export function ProductBeauty() {
    return (
        <Card className="h-full rounded-lg border w-full ">


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
                        {TABLE_ROWS.map(
                            ({ img, brand, productName, }, index) => {
                                const classes = " border-b border-blue-gray-50 py-4  h-full";
                                return (
                                    <tr className="h-full  ">
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} className="h-16  w-16" variant="rounded" alt="product" />
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray">
                                                        <span className="bg-[#EEEEEF] text-[#212636] p-2  rounded-lg">
                                                            {brand}
                                                        </span>
                                                    </Typography>
                                                    <Typography
                                                        // variant="h5"
                                                        color="blue-gray"
                                                        className="opacity-1 pt-2 lg:font-bold  font-normal text-[#212636]"
                                                    >
                                                        {productName}
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
                        )}
                    </tbody>
                </table>
            </CardBody>

        </Card>
    );
}