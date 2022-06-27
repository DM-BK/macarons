import { FC, ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface SectionProps {
  children: ReactNode,
}

export const Section: FC<SectionProps> = ({children}) => (
  <Grid container>
    {children}
  </Grid>
);