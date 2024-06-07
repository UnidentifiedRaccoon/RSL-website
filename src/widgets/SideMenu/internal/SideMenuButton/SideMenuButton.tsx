import {FC, ReactNode} from "react";
import {Button, Tooltip} from "@mui/joy";

interface SideMenuButtonProps {
    children: ReactNode;
    onClick: () => void;
    tooltip: string;
}

export const SideMenuButton: FC<SideMenuButtonProps> = ({children, tooltip, onClick}) => {
    return (
        <Tooltip title={tooltip} arrow placement="right">
            <Button
                onClick={onClick}
            >
                {children}
            </Button>
        </Tooltip>
    );
}
