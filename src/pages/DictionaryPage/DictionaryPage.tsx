import {Layout} from "../Layout";
import {Category, CategoryList, Search} from "../../widgets";
import {Box} from "@mui/joy";
import {useDispatch} from "react-redux";
import {loadDictionaryPage} from "../../features/store/pages/dictionary";
import {useMount} from "react-use";
import {Title} from "./internal";
import {useMatch} from "react-router-dom";

export const DictionaryPage = () => {

    const dispatch = useDispatch()
    useMount(() => {
        loadDictionaryPage()(dispatch)
    })

    const matchWord = useMatch('dictionary/:slug/:word')

    return (
        <Layout>
            <Box paddingTop="50px" width="100%">
                <Title/>
                <Search/>
                {!matchWord && <CategoryList/>}
                {matchWord && <Category/>}
            </Box>
        </Layout>
    )
}
