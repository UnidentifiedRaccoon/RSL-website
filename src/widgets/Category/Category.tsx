import {useLocation, useMatch, useNavigate} from "react-router-dom";
import {Stack} from "@mui/joy";
import {Navigation, VideoWord} from "./internal";
import {WordList} from "../WordList";
import styles from "./Category.module.css"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadCategory, loadSearchCategory} from "../../features/store/content/category";

export const Category = () => {
    const matchWord = useMatch('dictionary/:slug/:word')

    const dispatch = useDispatch()
    const slug = matchWord?.params.slug
    const word = matchWord?.params.word
    const navigate = useNavigate()
    const substring = new URLSearchParams(useLocation().search).get('search')

    useEffect(() => {
        if (slug === 'search' && substring) {
            loadSearchCategory(substring)(dispatch)
        } else if (slug) {
            loadCategory(slug)(dispatch)
        }
    }, [dispatch, navigate, slug, word])

    return (
        <Stack spacing={2} alignItems="center" justifyContent="center"
               paddingTop="60px"
        >
            <div className={styles.content}>
                <VideoWord/>
                <WordList/>
                <Navigation/>
            </div>
        </Stack>
    )
}
