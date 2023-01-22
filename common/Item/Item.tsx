import { ReactNode } from "react";

import { SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";

interface ItemProps {
  children: ReactNode,
  spacing?: number,
  sx?: SxProps<Theme>;
}

export const Item = ({children, ...rest}: ItemProps) => (
  <Grid {...rest}>
    {children}
  </Grid>
);