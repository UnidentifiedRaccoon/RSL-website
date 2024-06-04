import {ChangeEventHandler, FC, useCallback, useState} from "react";
import {Button, Typography} from "@mui/joy";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import styles from "./FileUpload.module.css"

interface FileUploadProps {
    onFileChange: (file: File) => void;
}

export const FileUpload: FC<FileUploadProps> = ({onFileChange}) => {
    const [file, setFile] = useState<File>()

    const fileChangeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
        if (event.target.files) {
            setFile(event.target.files[0])
            console.log(event.target.files[0])
            onFileChange(event.target.files[0])
        }
    }, [onFileChange]);


    const fileName = file && file.name.slice(0, 15) + '...' + file.name.split('.')[1]

    return (
        <Button
            sx={{
                width: "250px",
            }}
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            startDecorator={
                <CloudUploadIcon/>
            }
            size="lg"
        >
            <Typography sx={{
                maxWidth: '100%',
                overflow: 'hidden',
                textWrap: 'nowrap',
                color: "white",
            }}>
                {file ? fileName : 'Загрузить файл'}
            </Typography>
            <input className={styles.file} type="file" onChange={fileChangeHandler}/>
        </Button>
    )
}
