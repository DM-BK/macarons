import { ReactNode } from "react";
import Grid, {GridProps} from "@mui/material/Grid";

interface ItemProps extends GridProps {
  children: ReactNode,
}

export const Item = ({children}: ItemProps) => (
  <Grid item>
    {children}
  </Grid>
);