import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";
import {Typography} from "@mui/joy";
import styles from "./Word.module.css"
import cn from "classnames";

interface WordProps extends PropsWithChildren {
    href: string;
}

export const Word: FC<WordProps> = ({children, href}) => {
    return <NavLink to={`${href}`} className={({isActive}) => cn(styles.link, {[styles.activeLink]: isActive})}>
        <Typography level="title-md" sx={{
            color: "inherit",
        }}>
            {children}
        </Typography>
    </NavLink>
}
