import {ModalClose} from "@mui/joy";
import React, {useCallback, useEffect} from "react";
import {useMatch, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadModule} from "../../features/store/content/module";
import {Container} from "./internal";
import {loadLecture} from "../../features/store/content/lecture";
import {LectureTab} from "./internal/LectureTab/LectureTab";

export const ModuleModal = () => {
    const matchModule = useMatch('breed/module/:id')
    console.log(matchModule)
    const matchLecture = useMatch('breed/lecture/:id')
    const [open, setOpen] = React.useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (matchModule) {
            loadModule(Number(matchModule.params.id))(dispatch)
            setOpen(true)
        }
    }, [matchModule])

    useEffect(() => {
        if (matchLecture) {
            loadLecture(Number(matchLecture.params.id))(dispatch)
            setOpen(true)
        }
    }, [matchLecture])

    const onClose = useCallback(() => {
        setOpen(false)
        navigate('/breed')
    }, [navigate])


    return (
        <Container onClose={onClose} open={open}>
            <LectureTab/>
            <ModalClose/>
        </Container>
    );
};
