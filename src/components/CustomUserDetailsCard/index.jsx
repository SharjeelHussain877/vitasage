import { Avatar, Card, Typography } from "@material-tailwind/react";
import profileImg from './../../assets/icon.svg'

const TABLE_ROWS = [
    {
        Title: "First Name",
        Description: "Dannie",
        subTitle: "plan",
        subDescrip: "Annual Plan",
    },
    {
        Title: "Last Name",
        Description: "Russell",
        subTitle: "Start Date",
        subDescrip: "January 24,2024"

    },
    {
        Title: "Email",
        Description: "albert@gmail.com",
        subTitle: "End Date",
        subDescrip: "January 24,2025"

    },

];

export default function CustomUserDetailsCard({ name, lastname, email, subscriptionPlan, startDate, endDate }) {
    return (
        <div>
            <div className="flex items-center gap-3">
                <Avatar src={profileImg} alt={"profile image"} />
                <div>
                    <Typography color="blue-gray" variant="h4">
                        Dianne Russell
                    </Typography>

                </div>
            </div>
            <Typography
                variant="h6"
                color="blue-gray"
                className="text-[#212636] font-bold font-Inter pt-4 py-2">
                Basic Details
            </Typography>
            <Card className="h-full w-full shadow-none  border">

                <table className="w-full">

                    <tbody>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    First name
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {name}
                                </Typography>
                            </td>
                        </tr>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    Last name
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {name}
                                </Typography>
                            </td>
                        </tr>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    email
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {email}
                                </Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Typography
                variant="h6"
                color="blue-gray"
                className="text-[#212636] font-bold font-Inter pt-4 py-2">
                Subscription
            </Typography>
            <Card className="h-full w-full shadow-none  border">

                <table className="w-full">

                    <tbody>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    plan
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {subscriptionPlan}
                                </Typography>
                            </td>
                        </tr>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    start date
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {startDate}
                                </Typography>
                            </td>
                        </tr>
                        <tr >
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-600 capitalize"
                                >
                                    end date
                                </Typography>
                            </td>
                            <td className="p-4 border-b  border-gray-300">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-gray-900 capitalize min-w-36"
                                >
                                    {endDate}
                                </Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>

    );
}

