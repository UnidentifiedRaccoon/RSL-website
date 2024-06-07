import {useMount} from "react-use";
import {useDispatch, useSelector} from "react-redux";
import {loadPageBreed, selectPageBreed} from "../../features/store/pages/breed";
import {ModuleCard} from "../../entities";
import {Box, Grid} from "@mui/joy";
import styles from "./ModuleList.module.css"
import img1 from "./StabImages/1.webp"
import img2 from "./StabImages/2.webp"
import img3 from "./StabImages/3.webp"
import img4 from "./StabImages/4.webp"
import {useParams} from "react-router-dom";


const stabModuleImages = [
    img1, img2, img3, img4
]

const stabModuleProgress = [50, 10, 0, 0]

export const ModuleList = () => {
    const {modules} = useSelector(selectPageBreed)
    const dispatch = useDispatch()
    useMount(() => {
        loadPageBreed()(dispatch)
    })
    const {id} = useParams();
    const moduleElements = modules?.map((module, index) => <Grid xs={4} sm={4} md={4}
                                                                 key={module.id}><ModuleCard
        isActive={module.id === Number(id)} {...module}
        imgSrc={stabModuleImages[index]}
        progress={stabModuleProgress[index]}/></Grid>)

    return <Box className={styles.list}
                paddingTop="60px"
                display="flex"
                alignItems="center"
    >
        <Grid
            alignItems="stretch"
            container
            spacing={{xs: 2, md: 2}}
            columns={{xs: 4, sm: 8, md: 12}}
            sx={{flexGrow: 1, maxWidth: 1000}}
        >

            {moduleElements}
        </Grid>
    </Box>
}
