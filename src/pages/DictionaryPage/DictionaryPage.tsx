import {Layout} from "../Layout";
import {Category, CategoryList} from "../../widgets";
import {PageTitle} from "../../shared";
import {Box} from "@mui/joy";
import {useMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDictionaryPage, selectDictionaryPage} from "../../features/store/pages/dictionary";
import {useMount} from "react-use";

export const DictionaryPage = () => {
    const matchCategory = useMatch('dictionary/:slug')
    const matchWord = useMatch('dictionary/:slug/:word')
    const isCategoryOpen = Boolean(matchCategory) || Boolean(matchWord)
    const slug = matchCategory?.params.slug || matchWord?.params.slug
    const {categories} = useSelector(selectDictionaryPage)
    const category = categories?.find((category) => category.slug === slug)
    const dispatch = useDispatch()
    useMount(() => {
        loadDictionaryPage()(dispatch)
    })

    return (
        <Layout>
            <Box paddingTop="100px">
                <PageTitle>
                    {isCategoryOpen ? category?.title : 'Словарик'}
                </PageTitle>
                {!isCategoryOpen && <CategoryList/>}
                {isCategoryOpen && <Category/>}
            </Box>
        </Layout>
    )
}
