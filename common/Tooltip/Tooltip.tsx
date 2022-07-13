import React, {forwardRef, ReactElement, ReactNode} from 'react';
import MuiTooltip, {TooltipProps} from '@mui/material/Tooltip'

// export const Tooltip = forwardRef<HTMLElement, TooltipProps>(({children, title}, ref) => {
//     return (
//         <MuiTooltip title={title} ref={ref}>
//             {children}
//         </MuiTooltip>
//     );
// })

export const Tooltip = ({children, title}: TooltipProps) => {
    return (
        <MuiTooltip title={title} placement={'top'} PopperProps={{style: {pointerEvents: 'none'}}}>
            {children}
        </MuiTooltip>
    );
}