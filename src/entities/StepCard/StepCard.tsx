import {FC, useCallback} from "react";
import styles from "./StepCard.module.css"
import {Button} from "@mui/joy";
import { useNavigate } from "react-router-dom";

type StepCardProps = {
    title: string,
    description?: string
    id?: number
}

export const StepCard: FC<StepCardProps> = ({title, description, id}) => {
    const navigate = useNavigate()
    const onClickHandler = useCallback(() => {
        if (id) navigate(`/step/${id}`);
    }, [])

    return <div className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={onClickHandler}>Начать обучение</Button>
    </div>
}
