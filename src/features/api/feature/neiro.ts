import {NeiroResponceSheme} from "../../types/neiro/neiro";
import axios from "axios";

export const sendFileToNeiro = (image: string | ArrayBuffer | null): Promise<NeiroResponceSheme> => {
    return axios({
        method: "POST",
        url: "https://detect.roboflow.com/sign-language-recognition-mmbok/1",
        params: {
            api_key: "rbhBeux1LGVsZeGa8lpy"
        },
        data: image,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then(function (response) {
            console.log(response.data);
            return response.data
        })
}
