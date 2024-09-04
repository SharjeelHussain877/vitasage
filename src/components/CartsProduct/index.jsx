import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const defaultImage = 'https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png'

function CartItems({ img, name, description, unit, salePrice }) {

    const [qty, setQty] = React.useState(Number(unit))

    const increment = () => setQty(qty + 1);
    const decrement = () => setQty(qty > 1 ? qty - 1 : 1);
    return (
        <Card className="w-70 shadow-none relative border-[1px] border-gray-400 select-none">
            <RxCross2 className="absolute right-2 top-2 bg-transparent z-10 cursor-pointer hover:text-black" />
            <CardHeader shadow={false} floated={false} className="flex gap-2 rounded-none">
                <img
                    src={img || defaultImage}
                    alt="card-image"
                    className="h-12 w-auto max-w-24 object-cover"
                />
                <div className="mb-2 w-full">
                    <Typography color="blue-gray" className="font-medium">
                        {name}
                    </Typography>
                    <div className="w-full flex justify-between items-center">
                        <Typography color="blue-gray" className="font-medium flex">
                            ${qty * Number(salePrice)}
                        </Typography>
                        <div className="flex items-center gap-2">
                            <FiMinus className="text-gray-700 hover:text-black cursor-pointer p-1 text-2xl bg-gray-200 rounded-full" onClick={decrement} />
                            <span>{qty}</span>
                            <IoMdAdd className="text-gray-700 hover:text-black cursor-pointer p-1 text-2xl bg-gray-200 rounded-full" onClick={increment} />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="mt-[-1.5rem]">
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75 overflow-hidden text-ellipsis line-clamp-2">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default CartItems