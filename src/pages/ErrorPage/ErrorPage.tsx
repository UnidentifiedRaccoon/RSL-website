import {useRouteError} from 'react-router-dom'
import {Button} from "@mui/joy";
export const ErrorPage = () => {
    const error = useRouteError() as Error;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <Button>Back to Breed</Button>
                <i>{error.message}</i>
            </p>
        </div>
    );
}
