import { ReactNode } from "react";

import { SxProps, Theme } from "@mui/material";
import Grid, {GridProps} from "@mui/material/Grid";

// interface ItemProps {
//   children: ReactNode,
//   spacing?: number,
//   sx?: SxProps<Theme>;
//   item: number
// }

export const Item = ({children, ...rest}: GridProps) => (
  <Grid {...rest}>
    {children}
  </Grid>
);