import {FC, PropsWithChildren} from "react";
import {Typography} from "@mui/joy";
import styles from "./Description.module.css"

export const Description: FC<PropsWithChildren> = ({children}) => {
    return (
        <Typography
            className={styles.description}
            color="neutral"
            level="body-lg"
            variant="plain"
        >{children}</Typography>
    )
}
