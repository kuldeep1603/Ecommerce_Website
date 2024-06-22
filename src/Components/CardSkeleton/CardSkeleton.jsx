import React from 'react';
// style 
import "./CardSkeleton.css";
// Skeleton
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const CardSkeleton = ({ data }) => {
    return (
        <>
            <div className={`${data}`}>
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" animation="wave" className='product-img' />
                    <Skeleton variant="text" sx={{ fontSize: '1rem'}} animation="wave" className='product-name' />
                    <Skeleton variant="text" sx={{ fontSize: '1rem'}} animation="wave" className='product-name' />
                    <Skeleton variant="text" sx={{ fontSize: '1rem'}} animation="wave" className='product-name' />
                </Stack>
            </div>
        </>
    )
}

export default CardSkeleton
