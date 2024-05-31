import {Link} from "react-router-dom";
import {Card, CardContent, CardOverflow} from "@mui/joy";
import styles from "./CategoryCard.module.css"
import {Description, Image, Title} from "./internal";

type CategoryCardProps = {
    slug: string
    title: string
    description: string
    imageURL: string
    bgColor: string
}

export const CategoryCard = ({title, description, imageURL, slug, bgColor}: CategoryCardProps) => {
    return <Link className={styles.cardWrapper} to={`${slug}`}>
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
