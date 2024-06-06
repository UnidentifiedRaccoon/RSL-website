import {PageTitle} from "../../../../shared";
import {useMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectDictionaryPage} from "../../../../features/store/pages/dictionary";
import {selectCategory} from "../../../../features/store/content/category";
import {Description} from "../Description";

export const Title = () => {
    const matchWord = useMatch('dictionary/:slug/:word')
    const isCategoryOpen = Boolean(matchWord)
    const slug = matchWord?.params.slug
    const {categories} = useSelector(selectDictionaryPage)
    const cashedCategory = useSelector(selectCategory)
    const category = categories?.find((category) => category.slug === slug) || cashedCategory

    return (
        <>
            <PageTitle>
                {isCategoryOpen ? category?.title : 'Словарик'}
            </PageTitle>
            {isCategoryOpen && category?.description &&
                <Description>{category?.description}</Description>
            }
        </>
    )
}
