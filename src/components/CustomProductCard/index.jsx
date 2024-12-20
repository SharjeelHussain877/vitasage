import React from 'react';
import { Card, IconButton, Tooltip } from '@material-tailwind/react';
import { TbDotsVertical } from "react-icons/tb";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BiEditAlt } from "react-icons/bi";
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';


const CustomCard = ({ img, name, date, tag, id, handleOpen }) => {
  return (
    <Card className="w-full  mx-auto rounded-2xl overflow-hidden bg-white mb-auto p-4 py-6">
      <img className="w-full  h-44 object-cover rounded-lg" src={img} alt={name} onClick={() => handleOpen({img, name, date, tag, id})} />
      <div className="flex justify-between items-center mt-3">
        <div className="flex-grow">
          <h2 className="font-bold text-md">{name}</h2>
        </div>
        <div className="relative">
          <Menu placement="bottom-end">
            <MenuHandler>
              <IconButton className='bg-transparent shadow-none hover:shadow-none'>
                <TbDotsVertical size={18} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
              </IconButton>
            </MenuHandler>
            <MenuList className='p-2'>
              <Link to={`/dashboard/products/edit?id=${id}`}>
                <MenuItem className='flex items-center gap-2 capitalize tracking-wide'>
                  <BiEditAlt size={20} />edit
                </MenuItem>
              </Link>
              <MenuItem className='flex items-center gap-2 capitalize tracking-wide'><GoTrash size={20} color='red' /> delete </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        {tag && <span className="text-gray-900 px-3 py-1 text-xs bg-gray-200 rounded-2xl">{tag}</span>}
        <span className="text-gray-500 py-1 text-xs">{date}</span>
      </div>
    </Card>
  );
};

export default CustomCard;
