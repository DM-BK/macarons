import React from 'react';
import MuiTextField, {TextFieldProps} from '@mui/material/TextField'

export const TextField = ({variant, label, InputProps, sx, multiline, rows, placeholder}: TextFieldProps) => {
    return (
        <MuiTextField
            variant={variant}
            label={label}
            InputProps={InputProps}
            sx={sx}
            multiline={multiline}
            rows={rows}
            placeholder={placeholder}
        />
    );
};