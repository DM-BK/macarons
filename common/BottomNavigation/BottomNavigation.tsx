import { ReactNode, SyntheticEvent } from "react";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import { SxProps, Theme } from "@mui/material";

interface BottomNavigationProps {
  children: ReactNode,
  value?: any,
  showLabels?: boolean,
  sx?: SxProps<Theme>,
  onChange?: (event: SyntheticEvent<Element, Event>, value: any) => void,
}

export const BottomNavigation = ({children, showLabels, value, sx, onChange}: BottomNavigationProps) => {
  return (
    <MuiBottomNavigation showLabels={showLabels} value={value} sx={sx} onChange={onChange}>
      {children}
    </MuiBottomNavigation>
  );
};