import {FC} from "react";
import {Box} from "@mui/joy";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./Image.module.css"

interface ImageProps {
    imgSrc?: string;
}

export const Image: FC<ImageProps> = ({imgSrc}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
        >
            {imgSrc ?
                <img
                    className={styles.img}
                    loading="lazy"
                    src={imgSrc}
                    alt={imgSrc}
                /> :
                <div>
                    <ImageIcon sx={{fontSize: '3rem', opacity: 0.2}}/>
                </div>
            }
        </Box>
    )
}
