import {FileUpload} from "../../entities/FileUpload/FileUpload";
import {useDispatch, useSelector} from "react-redux";
import {selectNeiro, sendImageToNeiro, updateImage} from "../../features/store/feature/neiro";
import {useCallback} from "react";
import {Box, Button, Typography} from "@mui/joy";
import styles from "./NeiroPhotoLoader.module.css"
import {NeiroResultInfo} from "./internal";
import {FrameBorder} from "../../entities";

export const NeiroPhotoLoader = () => {
    const dispatch = useDispatch()
    const neiro = useSelector(selectNeiro)

    const fileChangeHandler = useCallback((file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => dispatch(updateImage({currentImage: reader.result as string}));
        reader.onerror = () => console.log('onFileUpload error');

    }, [dispatch])

    const sendImage = useCallback(() => {
        console.log('sendImage')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(sendImageToNeiro())
    }, [dispatch])

    const len = neiro.history.length
    const currentHistoryItem = neiro.history[len - 1]

    return (
        <Box
            position="relative"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width='800px'
                position="relative"
                overflow="hidden"
                sx={{
                    marginBottom: '15px',
                    borderRadius: '6px',
                    aspectRatio: '16/9'
                }}
            >
                <FrameBorder/>
                {currentHistoryItem &&
                    <NeiroResultInfo error={!currentHistoryItem.predictions.length}>
                        {currentHistoryItem.predictions && currentHistoryItem.predictions.map((predict) =>
                            <>Жест "{predict.class}" <br/> - c
                                вероятностью {(predict.confidence * 100).toFixed(1)}% <br/></>
                        )}
                        {!currentHistoryItem.predictions.length &&
                            <>Жест на изображении не распознан - попробуйте использовать другой снимок</>
                        }
                    </NeiroResultInfo>
                }
                <Typography
                    level="body-lg"
                >
                    Ваше изображение
                </Typography>
                {neiro.currentImage && <img
                    className={styles.image}
                    src={neiro.currentImage}/>
                }
            </Box>
            <Box
                position="absolute"
                bottom="-20px"
                left="20px"
                zIndex={3}
            >
                <FileUpload onFileChange={fileChangeHandler}/>
            </Box>
            <Box
                position="absolute"
                bottom="-20px"
                right="20px"
                zIndex={3}
            >
                <Button size="lg"
                        disabled={!neiro.currentImage}
                        onClick={sendImage}
                >Отправить</Button>
            </Box>
        </Box>

    )
}
