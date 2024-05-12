import {DialogTitle, Stack, Typography} from "@mui/joy";
import {NavigationList} from "../NavigationList";
import {capitalizeFirstLetter} from "../../../../features/libs/helpers/string";
import {ModalBreadcrumbs} from "../ModalBreadcrumbs/ModalBreadcrumbs";

interface TabProps {
    title: string,
    description?: string,
    items: { id: number, title: string }[],
    prefixUrl: string
    listTitle: string
}

export const Tab = ({title, description, items, prefixUrl, listTitle}: TabProps) => {
    return (
        <>
            <ModalBreadcrumbs/>
            <DialogTitle sx={{fontSize: 36}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                    padding="20px 0"
                >
                    <Typography fontSize={36}>
                        {capitalizeFirstLetter({value: title})}
                    </Typography>
                    {description &&
                        <Typography fontSize={16}>
                            {capitalizeFirstLetter({value: description})}
                        </Typography>
                    }
                </Stack>

            </DialogTitle>
            <Typography fontSize={14}>
                {capitalizeFirstLetter({value: listTitle})}
            </Typography>
            <NavigationList items={items} prefixUrl={prefixUrl}/>
        </>
    )
}
