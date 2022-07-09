import React from 'react';
import MuiAvatar, {AvatarProps} from '@mui/material/Avatar'

export const Avatar = ({src, alt}: AvatarProps) => {
    return (
        <MuiAvatar alt={alt} src={src}/>
    );
};