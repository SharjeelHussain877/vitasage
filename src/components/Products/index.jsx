import React from 'react'
import Inputs from './Input'
import { Button, Card, Typography } from '@material-tailwind/react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
export const AddProduct = () => {
    return (
        <>

            <div className=''>
                <Card className='w-full p-2 border shadow-md'>
                    <div>
                        <Typography variant="normal" color="" className="mt-3 font-bold text-[#212636]">
                            Upload Image
                        </Typography>
                        <div className='flex items-center flex-col border border-dotted bg-[#F9FAFB] rounded-xl py-7'>

                            <span className='bg-white shadow-lg w-12 h-12 p-4 rounded-full'>
                                {/* <IoCloudUploadOutline size={20} /> */}
                                <div className="flex items-center ">
                                    <label
                                        htmlFor="file-upload"
                                        className="flex items-center cursor-pointer "
                                    >
                                        <IoCloudUploadOutline size={20} />
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        // onChange={(e) => console.log(e.target.files[0])} // Handle the file selection here
                                    />
                                </div>
                            </span>
                            <Typography variant="small" color="#9EA9AA" className="mt-3 font-normal text-[#667085]">
                                Click to upload or drag and drop
                            </Typography>
                            <Typography variant="small" color="#9EA9AA" className="mt-3 font-normal flex items-center gap-1 text-[#9EA9AA]">
                                <IoIosInformationCircleOutline />   JPG, JPEG and Png (Max. File size: 25 MB)
                            </Typography>


                        </div>
                    </div>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                        <divc className='md:col-span-2'><Inputs Label={"Product Name"} /></divc>
                        <divc className='md:col-span-2'><Inputs Label={"Brand"} /></divc>
                        <div className="">
                            <Inputs Label={"Formulation "} />
                        </div>
                        <div>
                            <Inputs Label={"Description and Size"} />
                        </div>
                        <div className="">
                            <Inputs Label={"Main Uses "} />
                        </div>
                        <div>
                            <Inputs Label={"Active Ingredients"} />
                        </div>
                        <div className="">
                            <Inputs Label={"Dosage"} />
                        </div>
                        <div>
                            <Inputs Label={"Side Effects"} />
                        </div>
                        <div className="">
                            <Inputs Label={"Potential Allergens "} />
                        </div>
                        <div>
                            <Inputs Label={" Manufacturer"} />
                        </div>

                    </div>
                    <div className="grid grid-cols-6 py-5">
                        <div className="col-span-3">
                            <Button className=''>
                                Bulk Upload
                            </Button>
                        </div>
                        <div className="col-span-3 flex justify-end gap-2">
                            <Button className='bg-white text-black border'>
                                Cancel
                            </Button>
                            <Button className='bg-[#829D70]'>
                                Add
                            </Button>
                        </div>
                    </div>


                </Card>
            </div>
        </>
    )
}
