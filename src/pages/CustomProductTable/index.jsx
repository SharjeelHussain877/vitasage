import React, { useState } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import { products } from '../../constants';
import { LiaTimesSolid } from "react-icons/lia";
import { ProductCard } from '../../components/Card';
import CustomCard from '../../components/CustomProductCard';
import NoData from '../NoData';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

export default function CustomProductTable() {
    const [timeoutId, setTimeoutId] = React.useState(null);
    const [allProducts, setProducts] = React.useState(products || []);
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleOpen = (obj) => {
        setCurrentData(obj)
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

    function filterByName(value) {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
            const filteredData = products.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()));
            console.log(filteredData)
            setProducts(filteredData);
        }, 400);

        setTimeoutId(newTimeoutId);
    }

    return (
        <Card className='min-h-full'>
            <CardHeader floated={false} shadow={false} className="rounded-none ">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-2">
                    <Input
                        onChange={(e) => filterByName(e.target.value)}
                        label="Search"
                        icon={<HiMiniMagnifyingGlass className="h-5 w-5" />}
                    />
                </div>
            </CardHeader>
            <CardBody>
                {
                    allProducts.length ? 
                    (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {
                                allProducts.map((elem, index) => (
                                    <CustomCard
                                        handleOpen={handleOpen}
                                        key={index}
                                        {...elem}
                                    />
                                ))
                            }
                        </div>
                    ) :
                    (
                        <div className='w-full'>
                            <NoData />
                        </div>
                    )
                }
            </CardBody>
            <section>
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
            </section>
        </Card>
    );
}