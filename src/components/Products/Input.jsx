import { Typography ,Input} from '@material-tailwind/react'
import React from 'react'

const Inputs = ({Label}) => {
  return (
    <div><Typography
    variant="small"
    color="blue-gray"
    className=" font-semibold  "
  >
    {Label}
  </Typography>
  <Input
    type="text"
    className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900 shadow-none"
    labelProps={{
      className: "before:content-none after:content-none",
    }}
  /></div>
  )
}

export default Inputs