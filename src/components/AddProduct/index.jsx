import React, { useState } from 'react'
import Inputs from './Input'
import { Button, Card, Typography } from '@material-tailwind/react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoTrash } from 'react-icons/go';

export const AddProduct = () => {
    const [uploadedFile, setUploadedFile] = useState(null)

    return (
        <>
            <section className=''>
                <Card className='w-full p-2 border shadow-md'>
                    <div>
                        <Typography className="mt-3 font-bold text-[#212636]">
                            Upload Image
                        </Typography>
                        {
                            uploadedFile ? (
                                <Card className='flex flex-row items-center justify-between p-4 my-2'>
                                    <div className='flex items-center gap-4'>
                                        <img src={uploadedFile && URL.createObjectURL(uploadedFile)} alt='file error' className='h-36 w-36 rounded-lg object-cover' />
                                        <h3>{uploadedFile?.name}</h3>
                                    </div>
                                    <div>
                                        <GoTrash size={20} onClick={() => setUploadedFile(null)} className='cursor-pointer' />
                                    </div>
                                </Card>
                            ) : (
                                <div className='flex items-center flex-col border border-dotted bg-gray-100 rounded-xl py-7 my-2'>
                                    <div className='bg-white shadow-lg w-12 h-12 p-4 rounded-full'>
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
                                                onChange={(e) => setUploadedFile(e?.target?.files[0])} // Handle the file selection here
                                            />
                                        </div>
                                    </div>
                                    <Typography variant="small" className="mt-3 font-normal text-gray-500">
                                        Click to upload or drag and drop
                                    </Typography>
                                    <Typography variant="small" className="mt-3 font-normal flex items-center gap-1 text-gray-600">
                                        <IoIosInformationCircleOutline />   JPG, JPEG and Png (Max. File size: 25 MB)
                                    </Typography>
                                </div>
                            )
                        }
                    </div>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='md:col-span-2'><Inputs Label={"Product Name"} /></div>
                        <div className='md:col-span-2'><Inputs Label={"Brand"} /></div>
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
                    <div className="grid grid-cols-2 py-5">
                        <div className="col-span-2 sm:col-span-1">
                            <Button className='w-full sm:w-auto'>
                                Bulk Upload
                            </Button>
                        </div>
                        <div className="flex justify-end gap-2 col-span-2 sm:col-span-1">
                            <Button className='bg-white text-black border'>
                                Cancel
                            </Button>
                            <Button className='bg-primary'>
                                Add
                            </Button>
                        </div>
                    </div>


                </Card>
            </section>
        </>
    )
}
