import {Modal, ModalDialog} from "@mui/joy";
import {Transition} from "react-transition-group";
import {FC, ReactNode} from "react";

const speed = 250

interface ContainerProps {
    children: ReactNode,
    onClose: () => void
    open: boolean
}

export const Container: FC<ContainerProps> = ({children, onClose, open}) => {
    return (
        <Transition in={open} timeout={speed}>
            {(state: string) => (
                <Modal
                    keepMounted
                    open={!['exited', 'exiting'].includes(state)}
                    onClose={onClose}
                    slotProps={{
                        backdrop: {
                            sx: {
                                opacity: 0,
                                backdropFilter: 'none',
                                transition: `opacity ${speed}ms, backdrop-filter ${speed}ms`,
                                ...{
                                    entering: {opacity: 1, backdropFilter: 'blur(8px)'},
                                    entered: {opacity: 1, backdropFilter: 'blur(8px)'},
                                    exiting: {opacity: 0, backdropFilter: 'blur(0px)'},
                                    exited: {opacity: 0, backdropFilter: 'blur(0px)'},
                                }[state],
                            },
                        },
                    }}
                    sx={{
                        visibility: state === 'exited' ? 'hidden' : 'visible',
                    }}
                >
                    <ModalDialog
                        sx={{
                            width: '800px',
                            height: '100%',
                            opacity: 0,
                            transition: `opacity ${speed}ms`,
                            ...{
                                entering: {opacity: 1},
                                entered: {opacity: 1},
                                exiting: {opacity: 0},
                                exited: {opacity: 0},
                            }[state],
                        }}
                    >
                        {children}
                    </ModalDialog>
                </Modal>
            )}
        </Transition>
    )
}
