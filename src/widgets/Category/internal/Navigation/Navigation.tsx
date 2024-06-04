import cn from "classnames";
import {Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {Link, useMatch} from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {selectDictionaryPage} from "../../../../features/store/pages/dictionary";

import styles from "./Navigation.module.css"


export const Navigation = () => {
    const matchCategory = useMatch('dictionary/:slug')
    const matchWord = useMatch('dictionary/:slug/:word')
    const slug = matchCategory?.params.slug || matchWord?.params.slug
    const {categories} = useSelector(selectDictionaryPage)
    if (!categories) return
    const currentCategoryIndex = categories.findIndex(category => category.slug === slug)
    const prevCategory = currentCategoryIndex !== -1 && categories[currentCategoryIndex - 1]
    const nextCategory = currentCategoryIndex !== -1 && categories[currentCategoryIndex + 1]

    return (
        <div className={styles.navigation}>
            {prevCategory &&
                <Link className={styles.link} to={`/dictionary/${prevCategory.slug}`}>
                    <Typography sx={{color: 'white'}} fontSize={16} textAlign="center">
                        {prevCategory.title}
                    </Typography>
                </Link>
            }
            <Link className={cn(styles.link, styles.iconLink)} to={`/dictionary`}>
                <MenuBookIcon fontSize="large"/>
            </Link>
            {nextCategory &&
                <Link className={styles.link} to={`/dictionary/${nextCategory.slug}`}>
                    <Typography sx={{color: 'white'}} fontSize={16} textAlign="center">
                        {nextCategory.title}
                    </Typography>
                </Link>
            }
        </div>
    )
}
