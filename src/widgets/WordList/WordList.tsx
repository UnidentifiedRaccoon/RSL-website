import {useSelector} from "react-redux";
import {selectCategory} from "../../features/store/content/category";
import {Box, Grid} from "@mui/joy";
import {Word} from "./internal";
import styles from "./WordList.module.css"


export const WordList = () => {
    const {words, slug} = useSelector(selectCategory)
    const wordElems = words?.map(word => <Grid xs={4} sm={4} md={4}
                                               key={word.id}><Word href={`${slug}/${word.slug}`}>{word.spelling}</Word></Grid>)
    return (
        <Box
            maxHeight='300px'
            className={styles.list}
            sx={{
                flexGrow: 1, maxWidth: 1000,
                padding: '20px',
                borderRadius: '20px',
                boxSizing: 'border-box',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            }}
        >
            <Grid
                container
                spacing={{xs: 2, md: 2}}
                columns={{xs: 4, sm: 8, md: 8}}
                sx={{
                    height: '260px',
                    maxHeight: '50vw',
                    flexGrow: 1,
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                }}
            >

                {wordElems}
            </Grid>
        </Box>
    )
}
