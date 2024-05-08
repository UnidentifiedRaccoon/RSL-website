import {useMount} from "react-use";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {LectureCard} from "../../entities";
import {Grid} from "@mui/joy";
import styles from "./LectureList.module.css"
import {loadModule, selectModule} from "../../features/store/content/module";

export const LectureList = () => {
    const {lectures} = useSelector(selectModule)
    const dispatch = useDispatch()
    let { id } = useParams();
    useMount(() => {
        loadModule(Number(id))(dispatch)
    })

    const lectureElements = lectures?.map(lecture =>   <Grid xs={2} sm={4} md={4} key={lecture.id}><LectureCard {...lecture} /></Grid>)

    return <div className={styles.list}><Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
    >
        {lectureElements}
    </Grid>
    </div>
}
