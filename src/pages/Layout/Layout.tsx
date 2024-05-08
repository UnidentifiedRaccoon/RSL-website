import {FC, ReactNode} from "react";
import styles from "./Layout.module.css"

type LayoutProps = {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
    console.log(children)
    return <div className={styles.layout}>
        <main className={styles.main}>
            {children}
        </main>
    </div>

}
