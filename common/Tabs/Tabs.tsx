import MuiTabs, {TabsProps} from "@mui/material/Tabs";

export enum orientationTabs {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export const Tabs = ({children, sx, value, onChange, orientation}: TabsProps) => (
  <MuiTabs sx={sx} value={value} onChange={onChange} orientation={orientation}>
    {children}
  </MuiTabs>
);