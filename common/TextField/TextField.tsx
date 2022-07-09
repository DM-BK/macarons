import React, {forwardRef} from 'react';
import MuiTextField, {TextFieldProps} from '@mui/material/TextField'

type RefType = HTMLDivElement

export const TextField = forwardRef<RefType, TextFieldProps>((
    {
        variant,
        label,
        InputProps,
        sx,
        multiline,
        rows,
        placeholder,
        value,
        ...rest
    }, ref) => {
    return (
        <MuiTextField
            variant={variant}
            label={label}
            InputProps={InputProps}
            sx={sx}
            multiline={multiline}
            rows={rows}
            placeholder={placeholder}
            ref={ref}
            value={value}
            {...rest}
        />
    );
})