import { ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface SectionProps {
  children: ReactNode,
}

export const Section = ({children}: SectionProps) => (
  <Grid container>
    {children}
  </Grid>
);