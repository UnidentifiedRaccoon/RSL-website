import {Paragraph, Video} from "../../entities/Blocks";
import styles from "./ContentBlock.module.css"

interface ContentBlockProps {
    __component: string
}

export const ContentBlock = (blockProps: ContentBlockProps) => {
    switch (blockProps.__component) {
        case 'content-components.text':
            return <div className={styles.paragraph}>
                <Paragraph {...blockProps}/>
            </div>
        case 'content-components.video':
            return <div className={styles.video}>
                <Video {...blockProps}/>
            </div>
    }
}
