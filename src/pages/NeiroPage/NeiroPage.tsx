import {Layout} from "../Layout";
import {Button, Stack} from "@mui/joy";
import {PageTitle} from "../../shared";
import {Description} from "../DictionaryPage/internal";
import {NeiroHistoryAccordion, NeiroPhotoLoader} from "../../widgets";
import styles from "./NeiroPage.module.css"
import {useCallback, useEffect, useRef} from "react";
import {updateImage} from "../../features/store/feature/neiro";
import {useDispatch} from "react-redux";
import {FrameBorder} from "../../entities";

export const NeiroPage = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const getVideo = useCallback(() => {
        navigator.mediaDevices.getUserMedia({
            video: {width: 1920, height: 1080}
        }).then(stream => {
            const video = videoRef.current
            if (!video) return
            video.srcObject = stream
            video.play()
        }).catch((e) => {
            console.log(e)
        })
    }, [videoRef])

    useEffect(() => {
        getVideo()
    }, [getVideo, videoRef])

    const dispatch = useDispatch()

    const takePhoto = useCallback(() => {
        const width = 800
        const height = width / (16 / 9)

        const video = videoRef.current


        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ctx?.drawImage(video, 0, 0, width, height)
        console.log()
        dispatch(updateImage({currentImage: canvas.toDataURL()}))

    }, [dispatch])

    return (
        <Layout>
            <Stack direction="column" paddingTop="50px" width="100%" alignItems="center" paddingBottom="50px">
                <PageTitle>
                    Нейро
                </PageTitle>
                <Description>
                    Проверьте знание жестов с помощью автоматической проверки, основанной на специальной AI модели
                    <br/>
                    Загрузите готовый снимок, или сделайте его прямо из браузера!
                </Description>
                <div className={styles.camera}>
                    <FrameBorder/>
                    <video ref={videoRef} className={styles.video}></video>
                    <Button className={styles.captureButton} size="lg" onClick={takePhoto}>Снимок</Button>
                </div>
                <div
                    className={styles.photoLoader}
                >
                    <NeiroPhotoLoader/>
                </div>
                <NeiroHistoryAccordion/>
            </Stack>
        </Layout>
    )
}
