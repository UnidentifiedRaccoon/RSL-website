import {DialogTitle, Skeleton, Typography} from "@mui/joy";
import {NavigationList} from "../NavigationList/NavigationList";
import {useSelector} from "react-redux";
import {selectModule} from "../../../../features/store/content/module";

export const LectureTab = () => {
    const {title, lectures} = useSelector(selectModule)

    return (
        <>
            <Skeleton
                animation="wave"
                sx={{
                    height: '54px',
                    width: '50%',
                }} loading={!title}/>
            <DialogTitle sx={{fontSize: 36}}>
                <Typography fontSize={36}>
                    {title}
                </Typography>
            </DialogTitle>
            Темы курса
            {lectures && <NavigationList items={lectures}/>}
        </>
    )
}
