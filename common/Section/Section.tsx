import { ReactNode } from "react";
import Grid, {GridProps} from "@mui/material/Grid";

interface SectionProps extends GridProps {
  children: ReactNode
}

export const Section = ({children}: SectionProps) => (
  <Grid container>
    {children}
  </Grid>
);