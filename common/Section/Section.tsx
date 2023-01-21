import { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import { Theme, SxProps } from "@mui/material";

interface SectionProps {
  children: ReactNode,
  spacing: number,
  sx?: SxProps<Theme>;
}

export const Section = ({children, sx}: SectionProps) => (
  <Grid container sx={sx}>
    {children}
  </Grid>
);