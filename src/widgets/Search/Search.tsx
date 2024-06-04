import {FormEventHandler, MouseEventHandler, useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findWords, selectSearch} from "../../features/store/feature/search";
import {Autocomplete, Button, FormControl} from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css"

export const Search = () => {
    const {words} = useSelector(selectSearch)
    const suggestions = words.map((word) => word.spelling)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const handleSearchChange = useCallback<FormEventHandler<HTMLDivElement>>((event) => {
        findWords(event.target.value)(dispatch)
        setValue(event.target.value)
    }, [dispatch])

    const handleGoSearch = useCallback<MouseEventHandler>(() => {
        navigate(`search/${value}`)
    }, [navigate, value])


    return (
        <FormControl id="search"
                     sx={{
                         alignItems: "center"
                     }}
        >
            <Autocomplete
                sx={{
                    borderRadius: '20px',
                    padding: '6px 15px'
                }}
                className={styles.search}
                placeholder="Введите жест..."
                type="search"
                freeSolo
                disableClearable
                options={suggestions}
                startDecorator={<SearchIcon/>}
                onSelect={handleSearchChange}
                endDecorator={<Button
                    type="submit"
                    size="md"
                    sx={{
                        borderRadius: '20px'
                    }}
                    onClick={handleGoSearch}
                >Найти</Button>}
            />
        </FormControl>
    )
}
