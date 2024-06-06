import {useMatch} from "react-router-dom";
import {Video} from "../../../../entities/Blocks";
import {selectCategory} from "../../../../features/store/content/category";
import {useSelector} from "react-redux";

export const VideoWord = () => {
    const matchWord = useMatch('dictionary/:slug/:word')
    const {words} = useSelector(selectCategory)
    const word = matchWord?.params.word
    const currentVideoURL = words && words.find(w => w.slug === word)?.videoURL

    return (
        <>
            {currentVideoURL &&
                <Video url={currentVideoURL}/>}
        </>
    )
}
