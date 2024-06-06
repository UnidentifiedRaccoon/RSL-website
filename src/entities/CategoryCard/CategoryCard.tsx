import {Link, useNavigate} from "react-router-dom";
import {Card, CardContent, CardOverflow} from "@mui/joy";
import styles from "./CategoryCard.module.css"
import {Description, Image, Title} from "./internal";
import {loadCategory} from "../../features/store/content/category";
import {MouseEventHandler, useCallback} from "react";
import {useDispatch} from "react-redux";

type CategoryCardProps = {
    slug: string
    title: string
    description: string
    imageURL: string
    bgColor: string
}

export const CategoryCard = ({title, description, imageURL, slug, bgColor}: CategoryCardProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickHandler = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
        e.preventDefault()
        loadCategory(slug)(dispatch).then((category) => {
            if (category && category.words) {
                navigate(`${slug}/${category.words[0].slug}`)
            }
        })
    }, [dispatch, navigate, slug])


    return <Link className={styles.cardWrapper} to={`${slug}`} onClick={onClickHandler}>
        <Card
            className={styles.card}
            color="neutral"
            invertedColors={false}
            size="lg"
            orientation="horizontal" variant="soft" sx={{bgcolor: bgColor, padding: '10px'}}
        >
            <CardOverflow variant="soft" sx={{bgcolor: 'rgb(11, 107, 203)'}}>
                <Image imgSrc={imageURL}/>
            </CardOverflow>
            <CardContent>
                <Title title={title}/>
                <Description title={description}/>
            </CardContent>
        </Card>

    </Link>
}
