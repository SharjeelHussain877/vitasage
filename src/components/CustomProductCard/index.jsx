import React from 'react';
import { Tooltip } from '@material-tailwind/react';
import { FaInfoCircle } from 'react-icons/fa';

const CustomCard = ({ image, title, date, tooltipText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white max-h-72 p-4">
      <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />
      <div className="flex justify-between items-center mt-3">
        <div className="flex-grow">
          <h2 className="font-bold text-md">{title}</h2>
        </div>
        <div className="relative">
          <Tooltip content={tooltipText} placement="bottom">
            <FaInfoCircle className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </Tooltip>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-gray-900 px-3 py-1 text-xs bg-gray-200 rounded-2xl">{date}</span>
        <span className="text-gray-500 py-1 text-xs">{date}</span>
      </div>
    </div>
  );
};

export default CustomCard;
