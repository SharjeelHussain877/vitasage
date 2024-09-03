import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import drawerIcon from "./../../assets/drawer-icon.svg";
import { NavLink } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";

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
    <Card className="h-[calc(100vh)] fixed w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-primary rounded-bl-none rounded-tl-none">
      <div className="mb-2 p-4">
        <img src={drawerIcon} className="w-20" />
      </div>
      <List>
        <CustomListItem
          link='/dashboard/users'
          prefix={<TbPointFilled size={24} className="h-5 w-5 text-white" />}
          text='Dashboard'
        />

        <CustomListItem
          // link='/dashboard/Inventory'
          prefix={<TbPointFilled size={24} className="h-5 w-5 text-white" />}
          text='Inventory'
        />

        <CustomListItem
          link='/dashboard/users'
          prefix={<TbPointFilled size={24} className="h-5 w-5 text-white" />}
          text='Customers'
        />

        <Accordion
          open={open === 1}
          icon={
            <IoIosArrowDown
              size={24}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`}
            />
          }>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 text-white hover:text-white hover:bg-primary-500 rounded-lg">
              <ListItemPrefix>
                <TbPointFilled className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-white">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-6">
            <List className="p-0">
              <CustomListItem
                link='/dashboard/products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='show all products'
              />
              <CustomListItem
                link='/dashboard/add-product'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='add product'
              />
              <CustomListItem
                link='/dashboard/beauty-products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='beauty products'
              />
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <IoIosArrowDown
              size={24}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 2 ? "rotate-180" : ""}`}
            />
          }>
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 text-white hover:text-white hover:bg-primary-500">
              <ListItemPrefix>
                <TbPointFilled className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-white">
                Categories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-6">
            <List className="p-0">
              <CustomListItem
                // link='/dashboard/beauty-products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='create category'
              />
              <CustomListItem
                // link='/dashboard/products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='show all categories'
              />
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <IoIosArrowDown
              size={24}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 3 ? "rotate-180" : ""}`}
            />
          }>
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3 text-white hover:text-white hover:bg-primary-500">
              <ListItemPrefix>
                <TbPointFilled className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-white">
                Order
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-6">
            <List className="p-0">
              <CustomListItem
                // link='/dashboard/users'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='show order'
              />
              <CustomListItem
                // link='/dashboard/products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='Place order'
              />
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <IoIosArrowDown
              size={24}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 4 ? "rotate-180" : ""}`}
            />
          }>
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3 text-white hover:text-white hover:bg-primary-500">
              <ListItemPrefix>
                <TbPointFilled className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-white">
                suppliers
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-6">
            <List className="p-0">
              <CustomListItem
                // link='/dashboard/users'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text=' Show all suppliers'
              />
              <CustomListItem
                // link='/dashboard/products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='Add Supplier'
              />
              <CustomListItem
                // link='/dashboard/beauty-products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='Purchase order'
              />
              <CustomListItem
                // link='/dashboard/beauty-products'
                // prefix={<IoIosArrowForward size={24} className="h-3 w-5 text-white" />}
                text='Supplier deliveries'
              />
            </List>
          </AccordionBody>
        </Accordion>


        <CustomListItem
          // link='/dashboard/add-product/bulk'
          prefix={<TbPointFilled className="h-5 w-5 text-white" />}
          text='Sections'
        />

        <CustomListItem
          // link='/dashboard/add-product/bulk'
          prefix={<TbPointFilled className="h-5 w-5 text-white" />}
          text='Lifespan'
        />

        <CustomListItem
          // link='/dashboard/add-product/bulk'
          prefix={<TbPointFilled className="h-5 w-5 text-white" />}
          text='Reports'
        />
      </List>
    </Card>
  );
}