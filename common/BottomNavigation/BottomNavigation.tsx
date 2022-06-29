import MuiBottomNavigation, {BottomNavigationProps} from "@mui/material/BottomNavigation";


export const BottomNavigation = ({children, showLabels, value, onChange}: BottomNavigationProps) => {
  return (
    <MuiBottomNavigation showLabels={showLabels} value={value} onChange={onChange}>
      {children}
    </MuiBottomNavigation>
  );
};