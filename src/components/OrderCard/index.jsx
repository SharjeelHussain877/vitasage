import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

function OrderCard() {
    return (
        <Card className="roundedmd:max-w-4xl flex-col md:flex-row lg:flex-col xl:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-2/6 lg:w-full xl:md:w-2/6 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover "
                />
            </CardHeader>
            <CardBody className='w-full'>
                <div className='grid grid-cols-2'>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        Category
                    </Typography>
                    <Typography variant="h6" color="gray" className="mb-4 text-end">
                        2
                    </Typography>
                </div>
                <Typography variant="h4" color="blue-gray" className="mb-2 text-md">
                    name
                </Typography>
                <Typography color="gray" className="mb-8 font-normal text-sm">
                    discription ohdfiohfiolhslfo
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}



export default OrderCard