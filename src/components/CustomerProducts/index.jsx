import React, { useEffect } from "react";
import { Button, Chip, Collapse } from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa6";
import TaskCard from "../CustomerProductCard/index.jsx";

function CustomerProducts({ elem, handleCurrentTask }) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);


  return (
    <>
      <Button
        onClick={toggleOpen}
        className={`tracking-widest w-full text-gray-700 text-sm flex justify-between items-center bg-white shadow-none hover:shadow-none border-2 ${open && "border-primary text-md text-gray-900"
          }`}
      >
        <span className="flex items-center gap-2 capitalize">
          {elem.name || ''}
          <Chip
            variant="ghost"
            size="sm"
            value={elem.status}
            className={`text-[10px] sm:text-[12px] p-0 px-4 py-[1px] lowercase rounded-full ${elem.status == "pending" && "text-blue-900 bg-blue-50"} ${elem.status == "completed" && "text-green-900 bg-light-green-100"
              } ${elem.status == "rejected" && "text-red-900 bg-red-50"}`}
          />
        </span>

        <FaAngleDown
          size={18}
          className={`transition ease-in-out delay-100 duration-300 ${open ? "rotate-180" : "rotate-0"
            }`}
        />
      </Button>
      <Collapse open={open} className="p-1">
        {elem.products && elem.products.map((elem, index) => (
          <TaskCard elem={elem} key={index} handleCurrentTask={handleCurrentTask} />
        ))}
      </Collapse>
    </>
  );
}

export default CustomerProducts;