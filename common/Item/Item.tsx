import { FC, ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface ItemProps {
  children: ReactNode,
}

export const Item: FC<ItemProps> = ({children}) => (
  <Grid item>
    {children}
  </Grid>
);