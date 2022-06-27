import { ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface ItemProps {
  children: ReactNode,
}

export const Item = ({children}: ItemProps) => (
  <Grid item>
    {children}
  </Grid>
);