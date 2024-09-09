import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Card, Typography, Input } from '@material-tailwind/react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { showToast } from '../../utils/toastify';
import CustomDropdown from '../../components/CustomDropdown';
import CustomDatePicker from '../../components/CustomDatePicker';
import { formatLabel } from '../../utils/formatKeyForForm';

const AddSuplier = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [uploadedFile, setUploadedFile] = useState(null)

  const { register, getValues, setValue, handleSubmit, clearErrors, setError, reset, formState: { errors } } = useForm({})

  const { name, email, img, gender, phoneNum, salePrice, unit, } = getValues()

  const onSubmit = (data) => {
    if (!data.img) {
      setError('img', {
        type: 'required',
        message: 'image is required',
      });
      return;
    }
    if (!data.gender) {
      setError('gender', {
        type: 'required',
        message: 'gender is required',
      });
      return;
    }
    setUploadedFile(null)
    clearErrors();
    reset()
    showToast('success', "Save changes successfully!")
    console.log(data)
    navigate(-1)
  }

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const fileURL = URL.createObjectURL(file);
      setUploadedFile(fileURL)
      setValue('img', files);
      clearErrors('img');
    }
  };

  function handleSetValue(label, v) {
    clearErrors(label);
    setValue(label, v.value)
  }

  console.log(errors)


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
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
              >
                <div className='flex items-center flex-col border border-dotted bg-gray-100 rounded-xl py-7 my-2'>
                  <div className='bg-white shadow-lg w-12 h-12 p-4 rounded-full'>
                    <div className="flex items-center" htmlFor="file-upload">
                      <IoCloudUploadOutline size={20} />
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
              </label>
            )
          }
          {
            errors && (
              <p className='text-red-900 ms-1 text-sm'>{errors?.img?.message}</p>
            )
          }
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">

          <div className='md:col-span-2'>
            <CustomTextField
              {...{ label: "name", value: name || "", register, maxLength: 24, minLength: 4, errors }}
            />
          </div>
          <div className='md:col-span-2'>
            <CustomTextField
              {...{ label: "email", value: email || "", register, maxLength: 32, minLength: 4, errors }}
            />
          </div>
          <div>
            <CustomDropdown
              dropdownOptions={[{ value: 'male', label: "Male" }, { value: 'female', label: "Female" }, { value: 'Prefer not to say', label: "Prefer not to say" }]}
              handleSetValue={handleSetValue} selectedOption={gender} label={'gender'} />
            {
              errors && (
                <p className='text-red-900 ms-1 text-sm'>{errors?.gender?.message}</p>
              )
            }
          </div>
          <div>
            <CustomTextField
              {...{ label: "phone num", value: phoneNum || "", register, maxLength: 12, minLength: 1, errors }}
            />
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
              Add
            </Button>
          </div>
        </div>


      </Card>
    </form>
  )
}

const CustomTextField = ({ label, value, register, errors, maxLength, minLength }) => {
  const errorValue = errors?.[formatLabel(label)]?.message;

  return (
    <div>
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 font-semibold capitalize">
        {label}
      </Typography>
      <Input
        maxLength={maxLength || 46}
        {...register(formatLabel(label), {
          required: {
            value: true,
            message: `${label} is required`,
          },
          maxLength: {
            value: maxLength || 46,
            message: `Maximum length is ${maxLength || 46} characters`,
          },
          minLength: {
            value: minLength || 1,
            message: 'Minimum length is 3 characters',
          },
        })}
        defaultValue={value}
        type="text"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }} />
      {
        errors && (
          <p className='text-red-900 ms-1 text-sm'>{errorValue}</p>
        )
      }
    </div>
  )
}


export default AddSuplier