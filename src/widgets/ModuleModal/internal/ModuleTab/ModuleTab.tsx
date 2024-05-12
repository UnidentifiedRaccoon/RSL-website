import {DialogTitle, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {selectModule} from "../../../../features/store/content/module";
import {NavigationList} from "../NavigationList";

export const ModuleTab = () => {
    const {title, lectures} = useSelector(selectModule)

    return (
        <>
            <DialogTitle sx={{fontSize: 36}}>
                <Typography fontSize={36}>
                    {title}
                </Typography>
            </DialogTitle>
            Темы курса
            {lectures && <NavigationList items={lectures} prefixUrl="lecture"/>}
        </>
    )
}
