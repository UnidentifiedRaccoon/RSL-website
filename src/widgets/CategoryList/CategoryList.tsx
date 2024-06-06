import {useSelector} from "react-redux";
import {selectDictionaryPage} from "../../features/store/pages/dictionary";
import styles from "../ModuleList/ModuleList.module.css";
import {Box, Grid} from "@mui/joy";
import {CategoryCard} from "../../entities";

const bgColors = [""]

export const CategoryList = () => {
    const {categories} = useSelector(selectDictionaryPage)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const categoryElements = [...categories]?.sort((a, b) => a.order - b.order).map((category, index) =>
        <Grid xs={4} sm={4} md={4} key={category.id}>
            <CategoryCard {...category} bgColor={bgColors[index % bgColors.length]}/>
        </Grid>)

    return (
        <Box className={styles.list}
             paddingTop="60px"
             display="flex"
             alignItems="center"
             justifyContent="center"
        >
            <Grid
                container
                spacing={{xs: 2, md: 2}}
                columns={{xs: 4, sm: 8, md: 12}}
                sx={{flexGrow: 1, maxWidth: 1000}}
                alignItems="stretch"
            >

                {categoryElements}
            </Grid>
        </Box>
    )
}
