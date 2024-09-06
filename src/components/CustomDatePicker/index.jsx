import React from "react";
import {
    Input,
    Typography,
} from "@material-tailwind/react";


export default function CustomDatePicker({ label, value, handleSetValue, errros }) {

    return (
        <div>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-semibold capitalize">
                Date
            </Typography>
            <div className="flex justify-end items-center col-span-1 sm:col-span-2 lg:col-span-1">
                <Input
                    type="date"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                        className: "hidden",
                    }}
                    defaultValue={value}
                    id="todayDate"
                    onChange={(e) => {
                        const [year, month, day] = e.target.value.split('-');
                        const formattedDate = `${day}/${month}/${year}`; // DD/MM/YYYY format

                        handleSetValue(label, { value: formattedDate });
                    }}
                    containerProps={{ className: "min-w-[100px]" }} />
            </div>
        </div>
    );
}