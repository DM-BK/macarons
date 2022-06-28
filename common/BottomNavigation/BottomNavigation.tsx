import MuiBottomNavigation, {BottomNavigationProps} from "@mui/material/BottomNavigation";


export const BottomNavigation = ({children}: BottomNavigationProps) => {
  return (
    <MuiBottomNavigation>
      {children}
    </MuiBottomNavigation>
  );
};