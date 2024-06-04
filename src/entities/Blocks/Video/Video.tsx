import {FC} from "react";
import styles from "./Video.module.css"

export interface VideoProps {
    url: string;
}

export const Video: FC<VideoProps> = ({url}) => {
    return (
        <iframe width="100%" src={url} className={styles.video}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}
