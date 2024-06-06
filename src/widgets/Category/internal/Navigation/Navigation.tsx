import cn from "classnames";
import {Typography} from "@mui/joy";
import {useDispatch, useSelector} from "react-redux";
import {Link, useMatch, useNavigate} from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {selectDictionaryPage} from "../../../../features/store/pages/dictionary";

import styles from "./Navigation.module.css"
import {useCallback} from "react";
import {loadCategory} from "../../../../features/store/content/category";


export const Navigation = () => {
    const matchWord = useMatch('dictionary/:slug/:word')
    const slug = matchWord?.params.slug
    const {categories} = useSelector(selectDictionaryPage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onClickHandler = useCallback((e, categoryShallow) => {
        console.log(categoryShallow)
        e.preventDefault()
        loadCategory(categoryShallow.slug)(dispatch).then((category) => {
            if (category && category.words) {
                navigate(`${category.slug}/${category.words[0].slug}`)
            }
        })
    }, [dispatch, navigate, slug])

    if (!categories) return
    const currentCategoryIndex = categories.findIndex(category => category.slug === slug)
    const prevCategory = currentCategoryIndex !== -1 && categories[currentCategoryIndex - 1]
    const nextCategory = currentCategoryIndex !== -1 && categories[currentCategoryIndex + 1]


    return (
        <div className={styles.navigation}>
            {prevCategory &&
                <Link className={styles.link} to={`/dictionary/${prevCategory.slug}`}
                      onClick={(e) => onClickHandler(e, prevCategory)}>
                    <Typography sx={{color: 'white'}} fontSize={16} textAlign="center">
                        {prevCategory.title}
                    </Typography>
                </Link>
            }
            <Link className={cn(styles.link, styles.iconLink)} to={`/dictionary`}>
                <MenuBookIcon fontSize="large"/>
            </Link>
            {nextCategory &&
                <Link className={styles.link} to={`/dictionary/${nextCategory.slug}`}
                      onClick={(e) => onClickHandler(e, nextCategory)}>
                    <Typography sx={{color: 'white'}} fontSize={16} textAlign="center">
                        {nextCategory.title}
                    </Typography>
                </Link>
            }
        </div>
    )
}
