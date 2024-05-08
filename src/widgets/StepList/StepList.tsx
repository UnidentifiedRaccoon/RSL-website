import {useMount} from "react-use";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StepCard} from "../../entities";
import {Grid} from "@mui/joy";
import styles from "./StepList.module.css"
import {loadLecture, selectLecture} from "../../features/store/content/lecture";

export const StepList = () => {
    const {steps} = useSelector(selectLecture)
    const dispatch = useDispatch()
    let { id } = useParams();
    useMount(() => {
        loadLecture(Number(id))(dispatch)
    })

    const stepElements = steps?.map(step =>   <Grid xs={2} sm={4} md={4} key={step.id}><StepCard {...step} /></Grid>)

    return <div className={styles.list}><Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
    >
        {stepElements}
    </Grid>
    </div>
}
