import {Box} from "@mui/joy";
import {FC, PropsWithChildren, useState} from "react";

import styles from "./NeiroResultInfo.module.css"
import cn from "classnames";
import {useMount} from "react-use";

interface NeiroResultInfoProps extends PropsWithChildren {
    error?: boolean
}

export const NeiroResultInfo: FC<NeiroResultInfoProps> = ({children, error = false}) => {
    const [render, setRender] = useState(false)
    useMount(() => {
        setRender(true)
    })

    return (
        <Box
            className={cn(styles.info, {[styles.infoShow]: render, [styles.error]: error})}
        >
            {children}
        </Box>
    )
}
