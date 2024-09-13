import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { GoTrash } from 'react-icons/go';

function OrderCard({ img,
    name,
    description,
    unit,
    tag,
    online,
    date,
    purchasePrice,
    salePrice,
    categoryId,
    hasAccess,
    id }) {
    const [qty, setQty] = React.useState(Number(unit))

    const increment = () => setQty(qty + 1);
    const decrement = () => setQty(qty > 1 ? qty - 1 : 1);
    return (
        <Card className="w-full me-4 flex-row border-2 rounded-xl border-gray-300 shadow-none">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-24 h-24 shrink-0  rounded-r-none"
            >
                <img
                    src={img ? img : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}
                    alt="card-image"
                    className="h-full w-full object-cover "
                />
            </CardHeader>
            <CardBody className='w-full flex flex-col justify-between p-2' >
                <div>
                    <div className='flex justify-between'>
                        <Typography variant="" color="blue-gray" className="text-[10px] px-2 bg-gray-300 flex items-center justify-center rounded-full">
                            {tag || 'tag not defined'}
                        </Typography>

                        <>
                            <GoTrash size={22} color='red' className='cursor-pointer'/>
                        </>

                    </div>

                    <Typography variant="h5" color="blue-gray" className=" text-lg font-normal">
                        {name || 'no name available'}
                    </Typography>
                    
                    {/* <Typography color="gray" className="mb-8 font-normal text-sm line-clamp-2 ">
                        {description || "no description"}
                    </Typography> */}
                
                </div>
                <div className="w-full flex justify-between items-center select-none">
                
                    <Typography color="blue-gray" className="flex font-bold">
                        ${qty * Number(salePrice)}
                    </Typography>
                
                    <div className="flex items-center gap-4">
                        <FiMinus className="text-gray-700 hover:text-black cursor-pointer p-1 text-xl bg-gray-200 rounded-full" onClick={decrement} />
                        <span className='text-xl'>{qty}</span>
                        <IoMdAdd className="text-gray-700 hover:text-black cursor-pointer p-1 text-xl bg-gray-200 rounded-full" onClick={increment} />
                    </div>
                
                </div>
            </CardBody>
        </Card>
    );
}



export default OrderCard