import { Avatar, Card, Typography } from "@material-tailwind/react";
import profileImg from './../../assets/icon.svg'

const TABLE_ROWS = [
    {
        Title: "First Name",
        Description: "Dannie",
        subTitle:"plan",
        subDescrip:"Annual Plan",
    },
    {
        Title: "Last Name",
        Description: "Russell",
        subTitle:"Start Date",
        subDescrip:"January 24,2024"

    },
    {
        Title: "Email",
        Description: "albert@gmail.com",
        subTitle:"End Date",
        subDescrip:"January 24,2025"

    },

];

export function Table() {
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

                <table className="w-full  ">

                    <tbody>
                        {TABLE_ROWS.map(({ Title, Description, }, index) => {
                            const classes = "p-4 border-b  border-[#DCDFE4]";

                            return (
                                <tr >
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-[#667085]"
                                        >
                                            {Title}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-semibold  text-[#212636]"
                                        >
                                            {Description}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
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

                <table className="w-full  ">

                    <tbody>
                        {TABLE_ROWS.map(({ subTitle, subDescrip, }, index) => {
                            const classes = "p-4 border-b  border-[#DCDFE4]";

                            return (
                                <tr >
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-[#667085]"
                                        >
                                            {subTitle}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-semibold  text-[#212636]"
                                        >
                                            {subDescrip}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>

    );
}

