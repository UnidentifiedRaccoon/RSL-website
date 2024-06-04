import {loadCategory, loadSearchCategory, selectCategory} from "../../features/store/content/category";
import {useMatch, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "@mui/joy";
import {Navigation} from "./internal";
import {Video} from "../../entities/Blocks";
import {WordList} from "../WordList";
import styles from "./Category.module.css"

export const Category = () => {
    const matchCategory = useMatch('dictionary/:slug')
    const matchWord = useMatch('dictionary/:slug/:word')
    const dispatch = useDispatch()
    const slug = matchCategory?.params.slug || matchWord?.params.slug
    const word = matchWord?.params.word
    const {words} = useSelector(selectCategory)
    const currentVideoURL = words && (words.find(x => x.slug === word)?.videoURL || words[0]?.videoURL)
    const navigate = useNavigate()


    useEffect(() => {
        if (slug && slug !== 'search') {
            loadCategory(slug)(dispatch).then((category) => {
                if (category && category.words) {
                    navigate(`${slug}/${category.words[0].slug}`)
                }
            })
        } else if (slug === 'search' && word) {
            loadSearchCategory(word)(dispatch)
        }
    }, [dispatch, navigate, slug, word])

    return (
        <Stack spacing={2} alignItems="center" justifyContent="center"
               paddingTop="60px"
        >
            <div className={styles.content}>
                {currentVideoURL && <Video url={currentVideoURL}/>}
                <WordList/>
                <Navigation/>
            </div>
        </Stack>
    )
}
