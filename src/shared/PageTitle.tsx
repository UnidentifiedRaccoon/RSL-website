import {FC, PropsWithChildren} from "react";
import {Typography} from "@mui/joy";

export const PageTitle: FC<PropsWithChildren> = ({children}) => {
    return (
        <Typography
            color="primary"
            level="h1"
            noWrap={false}
            variant="plain"
            textAlign="center"
            marginBottom="20px"
        >
            {children}
        </Typography>
    )
}
