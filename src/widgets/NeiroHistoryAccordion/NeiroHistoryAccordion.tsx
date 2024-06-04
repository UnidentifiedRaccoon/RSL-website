import cn from "classnames";

import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {selectNeiro} from "../../features/store/feature/neiro";
import styles from "./NeiroHistoryAccordion.module.css"
import {FrameBorder} from "../../entities";
import {KeyboardArrowDown} from "@mui/icons-material";

export const NeiroHistoryAccordion = () => {
    const {history} = useSelector(selectNeiro)

    return (
        <AccordionGroup disableDivider sx={{maxWidth: '800px', width: '100%'}}>
            {history && [...history].reverse().map((hist) => {
                return (
                    <Accordion className={styles.accordion}>
                        <AccordionSummary
                            indicator={<KeyboardArrowDown fontSize="medium"/>}
                            className={cn(styles.summary, {[styles.error]: !hist.predictions.length})}>
                            <Typography sx={{color: 'white'}}>
                                {hist.predictions && hist.predictions.map((predict) =>
                                    <>Жест "{predict.class}" <br/> - c
                                        вероятностью {predict.confidence.toFixed(3)}% <br/></>
                                )}
                                {!hist.predictions.length &&
                                    <>Жест на изображении не распознан - попробуйте использовать другой снимок</>
                                }
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.details}>
                            <FrameBorder/>
                            {hist.image && <img
                                src={hist.image}/>
                            }
                        </AccordionDetails>
                    </Accordion>
                )
            })
            }
        </AccordionGroup>
    )
}
