import MuiListSubheader, {ListSubheaderProps} from "@mui/material/ListSubheader";

export const ListSubheader = ({children}:ListSubheaderProps) => {
  return (
    <MuiListSubheader>
      {children}
    </MuiListSubheader>
  );
};