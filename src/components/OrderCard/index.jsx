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
        <Card className="rounded me-4 flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row  border-2 border-gray-300 shadow-none">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-2/6 md:w-full lg:w-2/6 xl:w-2/6 lg:max-w-[400px] shrink-0 rounded-r-none"
            >
                <img
                    src={img ? img : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}
                    alt="card-image"
                    className="h-full w-full object-cover "
                />
            </CardHeader>
            <CardBody className='w-full flex flex-col justify-between'>
                <div>
                    <div className='grid grid-cols-2'>
                        <Typography variant="h4" color="blue-gray" className="mb-2 text-xl">
                            {tag || 'tag not defined'}
                        </Typography>

                        <Typography variant="h6" color="gray" className="mb-4 flex justify-end">
                            <GoTrash size={22} color='red' className='cursor-pointer'/>
                        </Typography>

                    </div>

                    <Typography variant="h4" color="blue-gray" className="mb-2 text-xl font-normal">
                        {name || 'no name available'}
                    </Typography>
                    
                    <Typography color="gray" className="mb-8 font-normal text-sm line-clamp-2">
                        {description || "no description"}
                    </Typography>
                
                </div>
                <div className="w-full flex justify-between items-center select-none">
                
                    <Typography color="blue-gray" className="flex font-bold">
                        ${qty * Number(salePrice)}
                    </Typography>
                
                    <div className="flex items-center gap-4">
                        <FiMinus className="text-gray-700 hover:text-black cursor-pointer p-1 text-3xl bg-gray-200 rounded-full" onClick={decrement} />
                        <span className='text-2xl'>{qty}</span>
                        <IoMdAdd className="text-gray-700 hover:text-black cursor-pointer p-1 text-3xl bg-gray-200 rounded-full" onClick={increment} />
                    </div>
                
                </div>
            </CardBody>
        </Card>
    );
}



export default OrderCard