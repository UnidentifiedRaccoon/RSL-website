import {FC} from "react";
import {Typography} from "@mui/joy";

interface TitleProps {
    title: string;
}

export const Title: FC<TitleProps> = ({title}) => {
    return (
        <Typography
            color="primary"
            level="body-md"
            noWrap={false}
            variant="plain"
        >{title}</Typography>
    )
}
