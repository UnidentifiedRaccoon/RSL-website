import {Paragraph, Video} from "../../entities/Blocks";
import styles from "./ContentBlock.module.css"

interface ContentBlockProps {
    __component: string
}

export const ContentBlock = (blockProps: ContentBlockProps) => {
    switch (blockProps.__component) {
        case 'content-components.text':
            return <div className={styles.paragraph}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*// @ts-expect-error*/}
                <Paragraph {...blockProps}/>
            </div>
        case 'content-components.video':
            return <div className={styles.video}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*// @ts-expect-error*/}
                <Video {...blockProps}/>
            </div>
    }
}
