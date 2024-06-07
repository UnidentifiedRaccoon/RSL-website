import {FC, ReactNode} from "react";
import styles from "./Layout.module.css"
import {SideMenu} from "../../widgets";

type LayoutProps = {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return <div className={styles.layout}>
        <SideMenu/>
        <main className={styles.main}>
            {children}
        </main>
    </div>

}
