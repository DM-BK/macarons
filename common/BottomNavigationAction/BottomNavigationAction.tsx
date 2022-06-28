import MuiBottomNavigationAction, {BottomNavigationActionProps} from "@mui/material/BottomNavigationAction";


export const BottomNavigationAction = ({children, label, icon}: BottomNavigationActionProps) => {
  return (
    <MuiBottomNavigationAction label={label} icon={icon}>
      {children}
    </MuiBottomNavigationAction>
  );
};