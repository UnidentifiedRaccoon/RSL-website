import {FC} from "react";
import {Card, CardOverflow} from "@mui/joy";
import {Image, Stats, Title} from "./internal"
import cn from "classnames"

import styles from './ModuleCard.module.css'
import {Link} from "react-router-dom";

type ModuleCardProps = {
    title: string,
    description?: string
    id?: number
    imgSrc?: string
    progress?: number
    isActive: boolean
}

export const ModuleCard: FC<ModuleCardProps> = ({title, id, imgSrc, progress, isActive}) => {
    return <Link className={styles.cardWrapper} to={`module/${id}`}>
        <Card
            className={cn(styles.card, {[styles.activeCard]: isActive})}
            color="neutral"
            invertedColors={false}
            orientation="vertical"
            size="lg"
            variant="soft"
            sx={{bgcolor: 'rgb(255,250,237)', height: "100%"}}
        >
            <CardOverflow variant="soft" sx={{bgcolor: 'rgb(255,228,201)'}}>
                <Image imgSrc={imgSrc}/>
            </CardOverflow>
            <Title title={title}/>
            <Stats progress={progress}/>
        </Card>
    </Link>
}
