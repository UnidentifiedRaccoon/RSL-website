import {useNavigate, useRouteError} from 'react-router-dom'
import {Button} from "@mui/joy";
import {useCallback} from "react";

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    console.error(error);

    const navigate = useNavigate()

    const backToBreed = useCallback(() => {
        navigate('/breed')
    }, [navigate])

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <Button onClick={backToBreed}>Back to Breed</Button>
                <i>{error.message}</i>
            </p>
        </div>
    );
}
