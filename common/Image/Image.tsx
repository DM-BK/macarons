import React from 'react';
import NextImage from 'next/image'

interface ImageProps {
    src: string
    width: string
    height: string
    alt: string
}

export const Image = ({src, alt, height, width}: ImageProps) => {
    return (
        <NextImage src={src} alt={alt} height={height} width={width}/>
    );
};