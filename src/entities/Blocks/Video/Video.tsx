import {FC} from "react";

export interface VideoProps {
    url: string;
}

export const Video: FC<VideoProps> = ({url}) => {
    return (
        <video width="100%" src={url} controls/>
    )
}
