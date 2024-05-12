import {useDispatch, useSelector} from "react-redux";
import {loadStep, selectStep} from "../../features/store/content/step";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

export const UseStepContent = () => {
    const {content} = useSelector(selectStep)
    const {id} = useParams()
    const dispatch = useDispatch()
    console.log(content)
    useEffect(() => {
        loadStep(Number(id))(dispatch)
    }, [id])


    return {
        content
    }
}
