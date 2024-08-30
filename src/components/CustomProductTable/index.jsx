import React, { useEffect, useState } from 'react'

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";


import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import CustomCard from '../CustomProductCard';

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["name", "email", "subscription plan", "action"];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
];

export default function CustomProductTable({ users }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRowsPerPageChange = (value) => {
        setRowsPerPage(Number(value));
        setCurrentPage(1); // Reset to the first page when changing rows per page
    };

    const totalPages = Math.ceil(users.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedData = users.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <Card className="h-full w-full p-4 grid grid-cols-4 gap-4">

            <CustomCard
                image="https://via.placeholder.com/400x200"
                title="Sample Title"
                date="Aug 29, 2024"
                tooltipText="This is additional information."
            />
            <CustomCard
                image="https://via.placeholder.com/400x200"
                title="Sample Title"
                date="Aug 29, 2024"
                tooltipText="This is additional information."
            />
            <CustomCard
                image="https://via.placeholder.com/400x200"
                title="Sample Title"
                date="Aug 29, 2024"
                tooltipText="This is additional information."
            />
            <CustomCard
                image="https://via.placeholder.com/400x200"
                title="Sample Title"
                date="Aug 29, 2024"
                tooltipText="This is additional information."
            />

        </Card>
    );
}