import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  
} from "@material-tailwind/react";

export function ProductCard({img, title, tag, date, id}) {
    return (
        // max-w-[30rem]
        <Card className="overflow-hidden shadow-none"> 
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mt-6"
            >
                <img
                    className="rounded-lg w-full"
                    src={img}
                    alt={title}
                />
            </CardHeader>
            <CardBody className="!pt-6 m-0 p-0">
                <Typography variant="small" color="blue-gray">
                    <span className="bg-[#EEEEEF] text-[#212636] p-2 rounded-lg">{tag}</span>
                </Typography>
                <Typography variant="h4" color="" className="mt-3 font-bold text-[#212636]">
                    {title}
                </Typography>
                <Typography variant="small" color="#9EA9AA" className="mt-3 font-normal text-[#9EA9AA]">
                    Date added: {date}
                </Typography>
            </CardBody>

        </Card>
    );
}