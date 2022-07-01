import React from 'react';
import NextImage, {ImageProps} from 'next/image'

export const Image = ({src, alt, height, width, objectFit, layout}: ImageProps) => {
    return (
        <NextImage src={src} alt={alt} height={height} width={width} objectFit={objectFit} layout={layout}/>
    );
};