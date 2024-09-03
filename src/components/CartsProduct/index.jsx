import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import React from "react";


function CartItems() {
    const [qty, setQty] = React.useState(1)

    const increment = () => setQty(qty + 1);
    const decrement = () => setQty(qty > 1 ? qty - 1 : 1); 

    return (
        <Card className="w-70 shadow-none relative border-[1px] border-gray-400 select-none">
            <RxCross2 className="absolute right-2 top-2 bg-transparent" />
            <CardHeader shadow={false} floated={false} className="flex gap-2 rounded-none">
                <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    alt="card-image"
                    className="h-12 w-24 object-cover"
                />
                <div className="mb-2 w-full">
                    <Typography color="blue-gray" className="font-medium">
                        Apple AirPods
                    </Typography>
                    <div className="w-full flex justify-between items-center">
                        <Typography color="blue-gray" className="font-medium flex">
                            ${qty * 700.00}
                        </Typography>
                        <div className="flex items-center gap-2">
                            <IoAddOutline className="text-gray-700 hover:text-black cursor-pointer" onClick={increment}/>
                            <span>{qty}</span>
                            <FiMinus className="text-gray-700 hover:text-black cursor-pointer" onClick={decrement}/>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody>

                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75 overflow-hidden text-ellipsis line-clamp-2"
                >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </Typography>
            </CardBody>
        </Card>
    );
}

export default CartItems