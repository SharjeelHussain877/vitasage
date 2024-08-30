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
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward  } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import drawerIcon from "./../../assets/drawer-icon.svg";

export default function CustomSideBar() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-primary rounded-bl-none rounded-tl-none">
      <div className="mb-2 p-4">
        <img src={drawerIcon} className="w-20"/>
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
              <ListItem className="text-white hover:text-white hover:bg-primary-500">
                <ListItemPrefix>
                  <IoIosArrowForward size={24} className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className="text-white hover:text-white hover:bg-primary-500">
                <ListItemPrefix>
                  <IoIosArrowForward size={24} className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className="text-white hover:text-white hover:bg-primary-500">
                <ListItemPrefix>
                  <IoIosArrowForward size={24} className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className="text-white hover:text-white hover:bg-primary-500">
          <ListItemPrefix>
            <IoBarChart className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full text-white" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="text-white hover:text-white hover:bg-primary-500">
          <ListItemPrefix>
            <IoBarChart className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="text-white hover:text-white hover:bg-primary-500">
          <ListItemPrefix>
            <IoBarChart className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className="text-white hover:text-white hover:bg-primary-500">
          <ListItemPrefix>
            <IoBarChart className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}