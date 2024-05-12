import {UseStepContent} from "./hooks";
import {ContentBlock} from "../ContentBlock";

import styles from "./StepContent.module.css"

export const StepContent = () => {
    const {content} = UseStepContent()

    if (!content) return
    return (
        <>
            <div className={styles.content}>
                {content.map(step => <ContentBlock {...step}/>)}
            </div>
        </>
    )
}
