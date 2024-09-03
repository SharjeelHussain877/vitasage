import React, { useEffect, useState } from 'react'

import {
    Card,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";

import CustomCard from '../CustomProductCard';
import { products } from '../../constants';
import { LiaTimesSolid } from "react-icons/lia";
import { ProductCard } from '../Card';

const TABLE_HEAD = ["name", "email", "subscription plan", "action"];

export default function CustomProductTable({ users }) {
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleOpen = (id) => {
        const findCurrentProduct = products.find(elem => elem.id === id)
        setCurrentData(findCurrentProduct)
        setOpen(!open)
    };

    // const handleRowsPerPageChange = (value) => {
    //     setRowsPerPage(Number(value));
    //     setCurrentPage(1); // Reset to the first page when changing rows per page
    // };

    // const totalPages = Math.ceil(users.length / rowsPerPage);

    // const handlePageChange = (page) => {
    //     if (page > 0 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };

    // const displayedData = users.slice(
    //     (currentPage - 1) * rowsPerPage,
    //     currentPage * rowsPerPage
    // );

    return (
        <>
            <Card className="h-full w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 ">
                {
                    products?.map((elem, index) => (
                        <CustomCard
                            handleOpen={handleOpen}
                            key={index}
                            {...elem}
                        />
                    ))
                }
            </Card>
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
                    <LiaTimesSolid size={24} onClick={handleOpen} className='absolute right-3 top-2 z-10 cursor-pointer'/>
                    <DialogBody>
                        <ProductCard {...currentData} />
                    </DialogBody>
                </Dialog>
            </>
        </>
    );
}