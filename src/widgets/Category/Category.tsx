import {loadCategory, selectCategory} from "../../features/store/content/category";
import {useMatch, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectDictionaryPage} from "../../features/store/pages/dictionary";
import {Stack} from "@mui/joy";
import {Description, Navigation} from "./internal";
import {Video} from "../../entities/Blocks";
import {WordList} from "../WordList";
import styles from "./Category.module.css"

export const Category = () => {
    const matchCategory = useMatch('dictionary/:slug')
    const matchWord = useMatch('dictionary/:slug/:word')
    const dispatch = useDispatch()
    const slug = matchCategory?.params.slug || matchWord?.params.slug
    const word = matchWord?.params.word
    const {categories} = useSelector(selectDictionaryPage)
    const cashedCategory = categories?.filter((category) => category.slug === slug)[0]
    const {words} = useSelector(selectCategory)
    const currentVideoURL = words && words.find(x => x.slug === word)?.videoURL
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            loadCategory(slug)(dispatch).then((category) => {
                if (category && category.words) {
                    navigate(`${slug}/${category.words[0].slug}`)
                }
            })
        }
    }, [dispatch, navigate, slug])

    return (
        <Stack spacing={2} alignItems="center" justifyContent="center">
            <Description>{cashedCategory?.description}</Description>
            <div className={styles.content}>
                {currentVideoURL && <Video url={currentVideoURL}/>}
                <WordList/>
                <Navigation/>
            </div>
        </Stack>
    )
}
