import {FC} from "react";
import {AspectRatio} from "@mui/joy";
import ImageIcon from "@mui/icons-material/Image";

interface ImageProps {
    imgSrc?: string;
}

export const Image: FC<ImageProps> = ({imgSrc}) => {
    return (
        <AspectRatio
            variant='plain'
            ratio="5/3"
            sx={{
                borderRadius: 'md',
            }}
        >
            {imgSrc ?
                <img
                    src={imgSrc}
                    alt={imgSrc}
                /> :
                <div>
                    <ImageIcon sx={{fontSize: '3rem', opacity: 0.2}}/>
                </div>
            }
        </AspectRatio>
    )
}
