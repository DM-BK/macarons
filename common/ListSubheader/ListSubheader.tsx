import { ReactNode } from "react";

import MuiListSubheader from "@mui/material/ListSubheader";
import { SxProps, Theme } from "@mui/material";

interface ListSubheaderProps {
  children: ReactNode,
  sx?: SxProps<Theme>,
}

export const ListSubheader = ({children, sx}: ListSubheaderProps) => {
  return (
    <MuiListSubheader sx={sx}>
      {children}
    </MuiListSubheader>
  );
};