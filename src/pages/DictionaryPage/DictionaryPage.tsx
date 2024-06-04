import {Layout} from "../Layout";
import {Category, CategoryList, Search} from "../../widgets";
import {PageTitle} from "../../shared";
import {Box} from "@mui/joy";
import {useMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDictionaryPage, selectDictionaryPage} from "../../features/store/pages/dictionary";
import {useMount} from "react-use";
import {Description} from "./internal";
import {selectCategory} from "../../features/store/content/category";

export const DictionaryPage = () => {
    const matchCategory = useMatch('dictionary/:slug')
    const matchWord = useMatch('dictionary/:slug/:word')
    const isCategoryOpen = Boolean(matchCategory) || Boolean(matchWord)
    const slug = matchCategory?.params.slug || matchWord?.params.slug
    const {categories} = useSelector(selectDictionaryPage)
    const cashedCategory = useSelector(selectCategory)
    const category = categories?.find((category) => category.slug === slug) || cashedCategory
    const dispatch = useDispatch()
    useMount(() => {
        loadDictionaryPage()(dispatch)
    })


    return (
        <Layout>
            <Box paddingTop="50px" width="100%">
                <PageTitle>
                    {isCategoryOpen ? category?.title : 'Словарик'}
                </PageTitle>
                {isCategoryOpen && category?.description &&
                    <Description>{category?.description}</Description>
                }
                <Search/>
                {!isCategoryOpen && <CategoryList/>}
                {isCategoryOpen && <Category/>}
            </Box>
        </Layout>
    )
}
