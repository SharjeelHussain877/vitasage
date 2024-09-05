import React from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
    Typography,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


export default function CustomDatePicker({ label, value, handleSetValue, errros }) {

    return (
        <div>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-semibold capitalize">
                Date
            </Typography>
            <Popover placement="bottom">
                <PopoverHandler>
                    <Input
                        placeholder="Select date"
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={() => null}
                        value={value && value}
                    />
                </PopoverHandler>
                <PopoverContent>
                    <DayPicker
                        mode="single"
                        selected={new Date(value)}
                        onSelect={(e) => {
                            handleSetValue(label, {
                                value: e?.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })
                            })
                        }}
                        showOutsideDays
                        className="border-0"
                        classNames={{
                            caption: "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-md text-gray-800",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
                            day_hidden: "invisible",
                        }}
                        components={{
                            IconLeft: ({ ...props }) => (
                                <IoIosArrowForward {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <IoIosArrowBack {...props} className="h-4 w-4" />
                            ),
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}