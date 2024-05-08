import {FC, useCallback} from "react";
import styles from "./LectureCard.module.css"
import {Button} from "@mui/joy";
import { useNavigate } from "react-router-dom";

type LectureCardProps = {
    title: string,
    description?: string
    id?: number
}

export const LectureCard: FC<LectureCardProps> = ({title, description, id}) => {
    const navigate = useNavigate()
    const onClickHandler = useCallback(() => {
        if (id) navigate(`/lecture/${id}`);
    }, [])

    return <div className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={onClickHandler}>Начать обучение</Button>
    </div>
}
