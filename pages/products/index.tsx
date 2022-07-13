import React from 'react';
import {Box} from '@common'
// import {} from '@mui/material/u'
import {motion, useAnimation, AnimationProps} from 'framer-motion'

const Products = () => {

    const controls = useAnimation()

    const handleClick = () => {
        controls.start({
            opacity: 1,
            // width: '100px',
            // height: '100px',
            x: 100,
            y: 100,
            transition: {
                duration: 3
            }
        })
    }

    return (
        <Box sx={{position: 'relative', top: '100px'}} onClick={handleClick}>
            {/*<motion.div initial={{*/}
            {/*    opacity: 1,*/}
            {/*    width: '50px',*/}
            {/*    height: '50px'*/}
            {/*}}*/}
            {/*            animate={controls}*/}
            {/*            style={{*/}
            {/*                backgroundColor: 'teal',*/}
            {/*                position: 'relative',*/}
            {/*                top: '100px'*/}
            {/*            }}*/}
            {/*>*/}
            {/*    Hello*/}
            {/*</motion.div>*/}
            <Box
                component={motion.div}
                sx={{
                    bgcolor: 'teal',
                    position: 'relative',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                }}
                initial={{
                    opacity: 0,
                }}
                animate={controls}
            >

            </Box>
        </Box>
    );
};

export default Products