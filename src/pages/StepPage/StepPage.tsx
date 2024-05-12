import {Layout} from "../Layout";
import {StepContent} from "../../widgets";
import {Navigation} from "./internal/Navigation/Navigation";
import {Stack} from "@mui/joy";

export const StepPage = () => {

    return (
        <Layout>
            <Stack sx={{flexGrow: '1', maxWidth: '700px'}}>
                <StepContent/>
                <Navigation/>
            </Stack>
        </Layout>
    )
}
