import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Button, Card, Typography, Input } from '@material-tailwind/react'
import { GoTrash } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { products } from '../../constants';
import { useForm } from 'react-hook-form';

const EditProduct = () => {
    const [searchParams] = useSearchParams()

    const paramId = searchParams.get('id');

    const [uploadedFile, setUploadedFile] = useState(null)
    const [currentProducts, setCurrentProducts] = useState(products.find(elem => elem.id === Number(paramId)))


    useEffect(() => {
        setUploadedFile(currentProducts.img)
    }, [currentProducts])

    const { control, register, watch, getValues, setValue, handleSubmit } = useForm({
        defaultValues: { ...currentProducts, formulation: "" },
    })

    const { name, categoryId, date, description, id, img, online, purchasePrice, salePrice, tag, unit, formulation } = getValues()

    const onSubmit = (data) => console.log(data)

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
            const fileURL = URL.createObjectURL(file);
            setUploadedFile(fileURL)
            setValue('img', files);
        }
    };

    console.log(getValues())

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className='w-full p-2 px-4 border shadow-none'>
                <div>
                    <Typography className="mt-3 font-bold text-[#212636]">
                        Upload Image
                    </Typography>
                    {
                        uploadedFile ? (
                            <Card className='flex flex-row items-center justify-between p-4 my-2'>
                                <div className='flex items-center gap-4'>
                                    <img src={uploadedFile && uploadedFile} alt='file error' className='h-36 w-36 rounded-lg object-cover' />
                                    <h3>{uploadedFile}</h3>
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
                                            onChange={handleFileChange} // Handle the file selection here
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
                    <div className='md:col-span-2'><CustomTextField label={"name"} value={name || ""} register={register} /></div>
                    <div className='md:col-span-2'><CustomTextField label={"Brand"} value={tag || ""} register={register} /></div>
                    <div className="">
                        <CustomTextField label={"Formulation"} value={formulation || ""} register={register} />
                    </div>
                    <div>
                        <CustomTextField label={"Description and Size"} value={online || ""} register={register} />
                    </div>
                    <div className="">
                        <CustomTextField label={"Main Uses "} value={getValues()?.tag || ""} register={register} />
                    </div>
                    <div>
                        <CustomTextField label={"Active Ingredients"} value={getValues()?.tag || ""} register={register} />
                    </div>
                    <div className="">
                        <CustomTextField label={"Dosage"} value={getValues()?.tag || ""} register={register} />
                    </div>
                    <div>
                        <CustomTextField label={"Side Effects"} value={getValues()?.tag || ""} register={register} />
                    </div>
                    <div className="">
                        <CustomTextField label={"Potential Allergens"} value={getValues()?.tag || ""} register={register} />
                    </div>
                    <div>
                        <CustomTextField label={"Manufacturer"} value={getValues()?.tag || ""} register={register} />
                    </div>

                </div>
                <div className="grid grid-cols-2 py-5">
                    <div className="col-span-2 sm:col-span-1">
                    </div>
                    <div className="flex justify-end gap-2 col-span-2 sm:col-span-1">
                        <Button className='bg-white text-black border'>
                            Cancel
                        </Button>
                        <Button type='submit' className='bg-primary' onClick={handleSubmit(onSubmit)}>
                            Save changes
                        </Button>
                    </div>
                </div>


            </Card>
        </form>
    )
}


const CustomTextField = ({ label, value, register, }) => {

    return (
        <div>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-semibold capitalize">
                {label}
            </Typography>
            <Input
                {...register(label?.toLowerCase()?.replace(/\s+/g, ''), { required: true, maxLength: 20 })}
                defaultValue={value}
                type="text"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                    className: "hidden",
                }}
                // readOnly
                containerProps={{ className: "min-w-[100px]" }} />
        </div>
    )
}
export default EditProduct