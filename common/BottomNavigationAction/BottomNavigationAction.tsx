import MuiBottomNavigationAction, {BottomNavigationActionProps} from "@mui/material/BottomNavigationAction";


export const BottomNavigationAction = ({children}: BottomNavigationActionProps) => {
  return (
    <MuiBottomNavigationAction>
      {children}
    </MuiBottomNavigationAction>
  );
};