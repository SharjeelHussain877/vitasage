import { Avatar, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoTrashOutline } from 'react-icons/io5'

const CategoryList = ({ img, name, description, handleOpen, handleEditorOpen }) => {
  return (
    <div className="h-full  cursor-pointer w-full flex justify-between items-center">
      <div className="py-2 h-full">
        <div className="flex items-center gap-3">
          <Avatar src={img} className="h-16  w-16" variant="rounded" alt="product" />
          <div className="flex flex-col">
            {name && <Typography
              variant="h6"
              className="opacity-1 pt-2  font-normal text-gray-900"
            >
              {name}
            </Typography>}
            {
              description &&
              <Typography
                variant="h6"
                className="opacity-1 pt-2  font-normal text-gray-600 "
              >
                {description}
              </Typography>
            }
          </div>
        </div>
      </div>
      <div className="z-10 flex gap-2">
        <IconButton className="bg-primary-100 shadow-none" onClick={() => handleEditorOpen({ img, name, description, })}>
          <CiEdit color="white" size={20} />
        </IconButton>
        <IconButton className="bg-red-900" onClick={() => handleOpen({ img, name, description, })}>
          <IoTrashOutline color="white" size={20} />
        </IconButton>
      </div>
    </div>
  )
}

export default CategoryList