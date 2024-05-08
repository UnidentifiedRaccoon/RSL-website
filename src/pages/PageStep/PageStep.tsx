import {Layout} from "../Layout";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useMount} from "react-use";
import {loadStep, selectStep} from "../../features/store/content/step";
import styles from "./PageStep.module.css"

export const PageStep = () => {
    const {title, content} = useSelector(selectStep)
    const dispatch = useDispatch()
    const { id } = useParams()
    useMount(() => {
        loadStep(Number(id))(dispatch)
    })


    return (
        <Layout>
            <div className={styles.page}>
                <h1>{title}</h1>
                <i>{content}</i>
            </div>
        </Layout>
        )
}
