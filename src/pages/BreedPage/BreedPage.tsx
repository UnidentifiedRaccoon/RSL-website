import {Layout} from "../Layout";
import {ModuleList, ModuleModal} from "../../widgets";
import {PageTitle} from "../../shared";
import {Box} from "@mui/joy";

export const BreedPage = () => {
    return (
        <Layout>
            <Box paddingTop="50px">
                <PageTitle>
                    Модули
                </PageTitle>
                <ModuleList/>
                <ModuleModal/>
            </Box>
        </Layout>
    )
}
