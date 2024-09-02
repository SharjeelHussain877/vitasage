import React, { useState } from 'react'
import { Button, Card, Input, Typography } from '@material-tailwind/react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoTrash } from 'react-icons/go';

const Inputs = ({ Label }) => {
  return (
    <div><Typography
      variant="small"
      color="blue-gray"
      className=" font-semibold  "
    >
      {Label}
    </Typography>
      <Input
        type="text"
        className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900 shadow-none"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      /></div>
  )
}

const BulkProduct = () => {
    const [uploadedFile, setUploadedFile] = useState(null)

    return (
        <>
            <section className='w-full'>
                <Card className='w-full p-8 border shadow-md'>
                    <div className='w-full max-w-xl md:min-w-96 mx-auto'>
                        <Typography className="mt-3 font-bold text-gray-800">
                            Upload CSV
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
                                <div className='flex items-center flex-col border border-dotted border-gray-300 bg-gray-50 rounded-xl py-7 my-2 cursor-pointer'>
                                    <div className='bg-white shadow-lg w-12 h-12 p-4 rounded-full'>
                                        <div className="flex items-center ">
                                            <label
                                                htmlFor="file-upload"
                                                className="flex items-center"
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
                                        <IoIosInformationCircleOutline />  XLS, CSV (Max. File size: 25 MB)
                                    </Typography>
                                </div>
                            )
                        }
                    </div>
                    <div className='w-full max-w-xl md:min-w-96 mx-auto'>
                        <Typography className="mt-3 font-bold text-[#212636]">
                            Upload Zip
                        </Typography>
                        {
                            uploadedFile ? (
                                <Card className='flex flex-row items-center justify-between p-4 my-2 '>
                                    <div className='flex items-center gap-4'>
                                        <img src={uploadedFile && URL.createObjectURL(uploadedFile)} alt='file error' className='h-36 w-36 rounded-lg object-cover' />
                                        <h3>{uploadedFile?.name}</h3>
                                    </div>
                                    <div>
                                        <GoTrash size={20} onClick={() => setUploadedFile(null)} className='cursor-pointer' />
                                    </div>
                                </Card>
                            ) : (
                                <div className='flex items-center flex-col border border-dotted bg-gray-50 rounded-xl py-7 my-2 cursor-pointer'>
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
                                        <IoIosInformationCircleOutline />  (Max. File size: 25 MB)
                                    </Typography>
                                </div>
                            )
                        }
                    </div>
                    <div className="grid grid-cols-2 py-5">
                        <div className="col-span-2 sm:col-span-1">
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


export default BulkProduct