import { ReactNode } from "react";
import Grid, { GridSpacing } from "@mui/material/Grid";
import { Theme, SxProps } from "@mui/material";

interface SectionProps {
  children: ReactNode,
  spacing: GridSpacing,
  sx?: SxProps<Theme>;
}

export const Section = ({children, spacing, sx}: SectionProps) => (
  <Grid container sx={sx} spacing={spacing}>
    {children}
  </Grid>
);