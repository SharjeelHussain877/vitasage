import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import drawerIcon from "./../../assets/drawer-icon.svg";
import { NavLink } from "react-router-dom";

const CustomListItem = ({ text, prefix, link = "#" }) => {
  return (
    <NavLink to={link}>
      <ListItem className="text-white hover:text-white active:text-white focus:text-white hover:bg-primary-500 active:bg-transparent focus:bg-primary select-none">
        <ListItemPrefix>
          {prefix}
        </ListItemPrefix>
        {text}
      </ListItem>
    </NavLink>
  )
}
export default function CustomSideBar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-primary rounded-bl-none rounded-tl-none">
      <div className="mb-2 p-4">
        <img src={drawerIcon} className="w-20" />
      </div>
      <List className="">
        <Accordion
          open={open === 1}
          icon={
            <IoIosArrowDown
              size={24}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 text-white hover:text-white hover:bg-primary-500">
              <ListItemPrefix>
                <IoBarChart className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-white">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <CustomListItem
                link='/users'
                prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='users'
              />
              <CustomListItem
                link='/products'
                prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='products'
              />
              <CustomListItem
                link='/beauty-products'
                prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='beauty products'
              />
            </List>
          </AccordionBody>
        </Accordion>

        <CustomListItem
          link='/add-product'
          prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
          text='Add product'
        />
       
        <CustomListItem
          link='/add-product/edit'
          prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
          text='Edit product'
        />

      </List>
    </Card>
  );
}