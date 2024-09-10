import React, { useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Dialog, DialogBody, Input, Typography, } from '@material-tailwind/react'
import { CiSearch } from 'react-icons/ci';
import { LiaTimesSolid } from 'react-icons/lia';
import { products } from "./../../constants"
import CategoryList from '../../components/CategoryList'
import NoData from "./../NoData"
import { useForm } from 'react-hook-form';
import { showToast } from '../../utils/toastify';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { GoTrash } from 'react-icons/go';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const Categories = () => {
  const [productsArray, setProducts] = React.useState(products || []);
  const [open, setOpen] = React.useState(false);
  const [uploadedFile, setUploadedFile] = React.useState(null)
  const [editorOpen, setEditorOpen] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState(null);
  const [currentObject, setCurrentObj] = React.useState(null);

  const { register, getValues, handleSubmit, clearErrors, setValue, setError, reset, formState: { errors } } = useForm({
    defaultValues: currentObject || {}
  })

  const { name, description, img } = getValues()

  useEffect(() => {
    if (currentObject) {
      reset(currentObject);
      setUploadedFile(currentObject.img)
    }
  }, [currentObject]);

  const handleDeleteImage = () => {
    setUploadedFile(null);
    setValue('img', '');
  };


  const onSubmit = (data) => {

    if (!uploadedFile && (!data.img || (typeof data.img === 'string' && data.img.trim() === '') || (data.img instanceof FileList && data.img.length === 0))) {
      setError('img', {
        type: 'required',
        message: 'Image is required',
      });
      return;
    }

    setUploadedFile(null)
    handleEditorOpen()
    clearErrors();
    reset()
    showToast('success', "Updated Category changes successfully!")
    console.log(data)
  }

  const handleOpen = (obj) => {
    setCurrentObj(obj)
    setOpen(!open)
  };

  const deleteCategory = () => {
    setCurrentObj(null)
    setOpen(false)
  };

  const handleEditorOpen = (obj) => {
    setCurrentObj(obj)
    setEditorOpen(!editorOpen)
  };

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

  function filterByName(value) {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      const filteredProdct = products.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()));
      setProducts(filteredProdct);
    }, 400);

    setTimeoutId(newTimeoutId);
  }

  return (
    <Card className='min-h-screen'>
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-2">
          <Input
            type="text"
            placeholder="type to search..."
            onChange={(e) => filterByName(e.target.value)}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
            icon={<HiMiniMagnifyingGlass className="h-5 w-5" />}
          />
        </div>
      </CardHeader>
      <CardBody >

        {
          productsArray?.length ?
            productsArray?.map(
              (elem, index) => {
                return (
                  <div key={index} className=''>
                    <CategoryList {...elem} handleOpen={handleOpen} handleEditorOpen={handleEditorOpen} />
                  </div>
                );
              },
            ) : (<NoData />)
        }
      </CardBody >

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
        <DialogBody>
          <h1>Are you sure you want to delete it ?</h1>
          <div className='flex justify-end gap-2'>
            <Button className='' onClick={handleOpen}>Cancel</Button>
            <Button className='bg-red-900' onClick={() => deleteCategory()}>Okay</Button>
          </div>
        </DialogBody>
      </Dialog>

      <Dialog
        open={editorOpen}
        size="sm"
        handler={handleEditorOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className='relative'
      >
        <DialogBody>
          <Typography variant='h5'>Edit Category</Typography>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div>
              <Typography className="mt-3 font-bold text-gray-900">
                Upload Image
              </Typography>
              {
                uploadedFile ? (
                  <Card className='flex flex-row items-center justify-between p-4 my-2'>
                    <div className='flex items-center gap-4'>
                      <img src={uploadedFile} alt='file error' className='h-36 w-36 rounded-lg object-cover' />
                      <h3>{uploadedFile}</h3>
                    </div>
                    <div>
                      <GoTrash size={20}
                        onClick={handleDeleteImage}
                        className='cursor-pointer' />
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
                errors?.img?.message && (
                  <p className='text-red-900 ms-1 text-sm'>{errors?.img?.message}</p>
                )
              }
            </div>
            <Typography variant='h6' className="mt-3 font-bold text-gray-900 capitalize">
              name
            </Typography>
            <Input
              maxLength={46}
              {...register('name', {
                required: {
                  value: true,
                  message: `Name is required`,
                },
                maxLength: {
                  value: 46,
                  message: `Maximum length is 46 characters`,
                },
                minLength: {
                  value: 3,
                  message: 'Minimum length is 3 characters',
                },
              })}
              defaultValue={currentObject?.name || ''}
              type="text"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }} />
            {
              errors?.name?.message && <Typography className='text-red-900 text-sm'>{errors?.name?.message}</Typography>
            }
            <Typography variant='h6' className="mt-3 font-bold text-gray-900 capitalize">
              description
            </Typography>
            <Input
              maxLength={96}
              {...register('description', {
                required: {
                  value: true,
                  message: `Description is required`,
                },
                maxLength: {
                  value: 96,
                  message: `Maximum length is 96 characters`,
                },
                minLength: {
                  value: 4,
                  message: 'Minimum length is 4 characters',
                },
              })}
              defaultValue={currentObject?.description || ''}
              type="text"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }} />
            {
              errors?.description?.message && <Typography className='text-red-900 text-sm'>{errors?.description?.message}</Typography>
            }
            <div className='flex justify-end gap-3'>
              <Button type='submit' className='mt-4 capitalize bg-red-900'>Cancel</Button>
              <Button type='submit' className='mt-4 capitalize'>Submit</Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>

    </Card >
  )
}

export default Categories