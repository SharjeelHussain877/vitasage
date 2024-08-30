import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  
} from "@material-tailwind/react";

export function ProductCard() {
    return (
        <Card className="max-w-[30rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0  p-4 "
            >
                <img
                    className="rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/b017/05a3/d77c0d45b24fbc296cc0f1639051adaa?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amzCLLu9QJjj~oP4~yxIc1MtE8~aUrik~~uaC5YZMQf-dfpLfDavT9zWF1Zb3Maoad2zqo8M7lCjTjql0x~BBwlOGytyRFra9sQeZ422oSEtptk4q1iTBuWdEmiVe6USIhfy~cwp4SwDfL8AFZeLcsv2JNCucV4y0~lPsfmZj8eJzs-3WwTsjvslpy2RKpHhdEuFgYK3uJvUM4uxgII1okx~jss2LDz54JReDsqjuXhKPMuzFr5E5uAh3XrM6nb3Gg3IeBS-xhQjPDCUWOAqRbBZe9JuFFy4ML0LVrhH4JleihusuXS9FTKcSbtFtOKxjjWuXQXJWj2-8j4JyCTMsA__"
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="small" color="blue-gray">
                    <span className="bg-[#EEEEEF] text-[#212636] p-2 rounded-lg">Aveeno</span>
                </Typography>
                <Typography variant="h4" color="" className="mt-3 font-bold text-[#212636]">
                    Daily Moisturizing Lotion
                </Typography>
                <Typography variant="small" color="#9EA9AA" className="mt-3 font-normal text-[#9EA9AA]">
                    Date added: Jan 24, 2024
                </Typography>
            </CardBody>

        </Card>
    );
}