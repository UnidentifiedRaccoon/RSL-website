import {FC} from "react";
import {CardContent, Divider, LinearProgress, Stack, Typography} from "@mui/joy";
import styles from "../../ModuleCard.module.css";
import {Characters} from "../../../../shared/characters";

interface StatsProps {
    progress?: number;
}

export const Stats: FC<StatsProps> = ({progress}) => {
    return (
        <>
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="stretch"
                spacing={2}
                className={styles.statsWrapper}
            >
                <CardContent orientation="horizontal" className={styles.stats}>
                    <Typography level="body-xs" fontWeight="md" textColor="rgba(144, 144, 144, 1)">
                        X - уроков
                    </Typography>
                    <Divider orientation="vertical"/>
                    <Typography level="body-xs" fontWeight="md" textColor="rgba(144, 144, 144, 1)">
                        {Characters.doubleTilde} X - часов
                    </Typography>
                </CardContent>
                <LinearProgress
                    color="neutral"
                    determinate
                    size="sm"
                    value={progress}
                />
            </Stack>
        </>
    )
}
