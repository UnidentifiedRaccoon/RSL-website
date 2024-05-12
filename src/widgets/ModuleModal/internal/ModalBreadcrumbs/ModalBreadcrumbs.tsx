import {TrendingFlat} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {capitalizeFirstLetter} from "../../../../features/libs/helpers/string";
import {Breadcrumbs} from "@mui/joy";
import {useModalBreadcrumbs} from "./hooks";

import styles from "./ModalBreadcrumbs.module.css"
import cn from "classnames";


export const ModalBreadcrumbs = () => {
    const {breadcrumbs} = useModalBreadcrumbs()
    return (
        <Breadcrumbs separator={<TrendingFlat/>} aria-label="breadcrumbs"
                     sx={{
                         padding: 0,
                         borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                     }}
        >
            {breadcrumbs.map((breadcrumb, index) => (
                <Link key={index} to={breadcrumb.path} className={cn(styles.link, {[styles.active]: breadcrumb.active})}
                      style={{}}>{capitalizeFirstLetter({value: breadcrumb.title})}</Link>
            ))}
        </Breadcrumbs>
    )
}
