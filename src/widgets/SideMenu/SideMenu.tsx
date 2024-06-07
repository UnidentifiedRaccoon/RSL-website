import {List, ListItem} from "@mui/joy";
import {AppsRounded, InterestsRounded, MenuBookRounded} from "@mui/icons-material";
import {SideMenuButton} from "./internal";
import styles from "./SideMenu.module.css"
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const SideMenu = () => {
    const navigate = useNavigate()

    const onBreedClick = useCallback(() => {
        navigate('/breed')
    }, [navigate])

    const onDictionaryClick = useCallback(() => {
        navigate('/dictionary')
    }, [navigate])

    const onNeiroClick = useCallback(() => {
        navigate('/neiro')
    }, [navigate])

    return (
        <aside className={styles.aside}>
            <nav>
                <List>
                    <ListItem>
                        <SideMenuButton onClick={onBreedClick} tooltip="Модули">
                            <AppsRounded/>
                        </SideMenuButton>
                    </ListItem>
                    <ListItem>
                        <SideMenuButton onClick={onDictionaryClick} tooltip="Словарь">
                            <MenuBookRounded/>
                        </SideMenuButton>
                    </ListItem>
                    <ListItem>
                        <SideMenuButton onClick={onNeiroClick} tooltip="Нейро">
                            <InterestsRounded/>
                        </SideMenuButton>
                    </ListItem>
                </List>
            </nav>
        </aside>
    );
}
