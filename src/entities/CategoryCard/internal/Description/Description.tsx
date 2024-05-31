import {FC} from "react";
import {Typography} from "@mui/joy";
import styles from "./Description.module.css"

interface TitleProps {
    title: string;
}

export const Description: FC<TitleProps> = ({title}) => {
    return (
        <Typography
            className={styles.description}
            color="neutral"
            level="body-xs"
            variant="plain"
        >{title}</Typography>
    )
}
