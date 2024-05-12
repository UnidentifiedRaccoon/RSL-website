import {useMatch, useNavigate} from "react-router-dom";
import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadModule, selectModule} from "../../features/store/content/module";
import {loadLecture, selectLecture} from "../../features/store/content/lecture";
import {selectPageBreed} from "../../features/store/pages/breed";

interface UseMatchModalParams {
    setOpen: (x: boolean) => void
}

export const useMatchModal = ({setOpen}: UseMatchModalParams) => {
    const matchModule = useMatch('breed/module/:id')
    const {modules} = useSelector(selectPageBreed)
    const id = Number(matchModule?.params.id)
    const moduleData = modules?.filter((module) => module.id === id)[0]
    const title = moduleData?.title || 'модуль'

    const {id: loadedId, lectures, description} = useSelector(selectModule)
    const dispatch = useDispatch()

    useEffect(() => {
        if (matchModule) {
            loadModule(id)(dispatch)
            setOpen(true)
        }
    }, [dispatch, matchModule, setOpen])

    console.log(loadedId)
    console.log(lectures)
    console.log(id)

    return {
        module: {
            match: Boolean(matchModule),
            id,
            title,
            items: loadedId === id ? lectures || [] : [],
            prefixUrl: 'lecture',
            description,
            listTitle: 'лекции',
        }
    }
}

interface UseMatchLectureParams {
    setOpen: (x: boolean) => void
}

const useMatchLecture = ({setOpen}: UseMatchLectureParams) => {
    const matchLecture = useMatch('breed/lecture/:id')
    const {lectures} = useSelector(selectModule)
    const id = Number(matchLecture?.params.id)
    const lectureData = lectures?.filter((lecture) => lecture.id === id)[0]
    const title = lectureData?.title || 'урок'
    const {id: loadedId, steps, description} = useSelector(selectLecture)

    const dispatch = useDispatch()

    useEffect(() => {
        if (matchLecture) {
            loadLecture(id)(dispatch)
            setOpen(true)
        }
    }, [dispatch, matchLecture, setOpen])

    return {
        lecture: {
            match: Boolean(matchLecture),
            id,
            title,
            items: loadedId === id ? steps || [] : [],
            prefixUrl: '/step',
            description,
            listTitle: 'шаги',
        }
    }
}

const emptyTab = {
    match: false,
    id: 0,
    items: [],
    prefixUrl: '',
    title: '',
    description: '',
    listTitle: '',
}

export const useModuleModal = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const {module} = useMatchModal({setOpen})
    const {lecture} = useMatchLecture({setOpen})

    const navigate = useNavigate()

    useEffect(() => {
        if (!module.match && !lecture.match) setOpen(false)
    }, [module, lecture])

    const onClose = useCallback(() => {
        setOpen(false)
        navigate('/breed')
    }, [navigate])

    return {
        open,
        onClose,
        tab: (module.match) ? module : (lecture.match) ? lecture : emptyTab
    }
}
