import {ModalClose} from "@mui/joy";
import {Container} from "./internal";
import {useModuleModal} from "./hooks";
import {Tab} from "./internal/Tab/Tab";

export const ModuleModal = () => {
    const {tab, open, onClose} = useModuleModal()

    return (
        <Container onClose={onClose} open={open}>
            {tab.match && <Tab {...tab}/>}
            <ModalClose/>
        </Container>
    );
};
