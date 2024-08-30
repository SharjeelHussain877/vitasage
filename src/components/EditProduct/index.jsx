import React, { useState } from 'react'
import { Button, Card, Typography, Input } from '@material-tailwind/react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";

const EditProduct = ({ Product_name, brand, Formulation, description, Main_Uses, Active_Ingredients, Dosage, Side_Effects, Manufacturer, Potential_Allergens
}) => {
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
                                        <GoTrash size={20} onClick={() => setUploadedFile(null)} className='cursor-pointer'/>
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
                        <div className='md:col-span-2'><CustomTextField Label={"Product Name"}  /></div>
                        <div className='md:col-span-2'><CustomTextField Label={"Brand"}  /></div>
                        <div className="">
                            <CustomTextField Label={"Formulation"} />
                        </div>
                        <div>
                            <CustomTextField Label={"Description and Size"}  />
                        </div>
                        <div className="">
                            <CustomTextField Label={"Main Uses "}  />
                        </div>
                        <div>
                            <CustomTextField Label={"Active Ingredients"} />
                        </div>
                        <div className="">
                            <CustomTextField Label={"Dosage"} />
                        </div>
                        <div>
                            <CustomTextField Label={"Side Effects"}  />
                        </div>
                        <div className="">
                            <CustomTextField Label={"Potential Allergens "}  />
                        </div>
                        <div>
                            <CustomTextField Label={" Manufacturer"} />
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


const CustomTextField = ({ Label, value }) => {
    return (
        <div><Typography
            variant="small"
            color="blue-gray"
            className=" font-semibold capitalize"
        >
            {Label}
        </Typography>
            <Input
                value={value}
                type="text"
                className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900 shadow-none"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            /></div>
    )
}
export default EditProduct