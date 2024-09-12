import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

function TaskCard({ elem, handleCurrentTask }) {

  return (
    <Card onClick={() => handleCurrentTask(elem)} className="my-2 p-0 w-full overflow-visible select-none active:bg-primary-300 relative rounded-lg shadow-none border-2 cursor-pointer md:hover:scale-[1.01] md:hover:shadow-lg">
      <CardBody className="flex">

        <div className="h-16 md:h-20 w-16 md:w-20 rounded-full overflow-hidden">
          <img src={elem.product_img} alt={elem.product_name || 'no product title'} className="h-full w-full object-cover object-center" />
        </div>

        <div className="flex-grow flex items-center ps-2">
          <div className="grid grid-cols-5 w-full">

            <Typography
              color="blue-gray"
              className="mb-2 capitalize col-span-2"
            >
              {elem.product_name}
            </Typography>

            <Typography
              color="blue-gray"
              className="mb-2"
            >
              {elem.category.name || 'no category defined'}
            </Typography>

            <Typography
              color="blue-gray"
              className="mb-2 capitalize flex justify-center"
            >
              {elem.qty}
            </Typography>

            <div className="flex items-center justify-end">
              <Chip
                variant="ghost"
                size="sm"
                value={elem.status}
                className={`text-[10px] sm:text-[12px] p-0 px-4 py-1 rounded-full ${elem.status == "pending" && "text-blue-900 bg-blue-50"} ${elem.status == "completed" && "text-green-900 bg-light-green-100"
                  } ${elem.status == "rejected" && "text-red-900 bg-red-50"}`}
              />
            </div>
          </div>

        </div>
      </CardBody>
    </Card>
  );
}

export default TaskCard;