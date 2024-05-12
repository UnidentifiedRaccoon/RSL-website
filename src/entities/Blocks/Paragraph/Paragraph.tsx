import {Typography} from "@mui/joy";
import {FC} from "react";

interface ParagraphProps {
    text: string
}

export const Paragraph: FC<ParagraphProps> = ({text}) => {
    return (
        <Typography fontSize={18}>
            {text}
        </Typography>
    )
}
