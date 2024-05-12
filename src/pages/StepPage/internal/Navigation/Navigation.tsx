import {Stack, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {selectStep} from "../../../../features/store/content/step";
import {Link} from "react-router-dom";

import styles from "./Navigation.module.css"


export const Navigation = () => {
    const {id} = useSelector(selectStep)

    return (
        <Stack flexGrow='1' direction="row" justifyContent={"space-between"}>
            <Link className={styles.link} to={`/step/${id - 1}`}><Typography sx={{color: 'white'}} fontSize={16}>К
                предыдущему
                шагу</Typography></Link>
            <Link className={styles.link} to={`/step/${id + 1}`}><Typography sx={{color: 'white'}} fontSize={16}>К
                следующему
                шагу</Typography></Link>
        </Stack>
    )
}
