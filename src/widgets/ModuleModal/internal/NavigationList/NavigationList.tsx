import {FC} from "react";
import {List, ListItem, ListItemButton, ListItemContent, Stack, Typography} from "@mui/joy";
import {KeyboardArrowRight} from "@mui/icons-material";
import {capitalizeFirstLetter} from "../../../../features/libs/helpers/string";

import styles from "./NavigationList.module.css"
import {Link} from "react-router-dom";

interface LecturesListProps {
    items: { id: number, title: string }[]
}

export const NavigationList: FC<LecturesListProps> = ({items}) => {
    const elems = items.map((item, index) => {
        return (
            <Link className={styles.itemLink} to={`lecture/${item.id}`}>
                <ListItem>
                    <ListItemButton
                        sx={{
                            padding: '20px',
                            borderRadius: '10px',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                className={styles.itemIndex}
                                width="20px"
                                textAlign="right"
                                fontSize={18}
                            >
                                {index + 1}
                            </Typography>
                            <span>.</span>
                        </Stack>
                        <ListItemContent><Typography
                            fontSize={18}>{capitalizeFirstLetter({value: item.title})}</Typography></ListItemContent>
                        <KeyboardArrowRight/>
                    </ListItemButton>
                </ListItem>
            </Link>

        )
    })

    return (
        <List>
            {elems}
        </List>
    )
}
