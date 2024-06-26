import {DialogTitle, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {NavigationList} from "../NavigationList";
import {selectLecture} from "../../../../features/store/content/lecture";

export const LectureTab = () => {
    const {title, steps} = useSelector(selectLecture)

    return (
        <>
            <DialogTitle sx={{fontSize: 36}}>
                <Typography fontSize={36}>
                    {title}
                </Typography>
            </DialogTitle>
            Темы курса
            {steps && <NavigationList items={steps} prefixUrl="/step"/>}
        </>
    )
}
