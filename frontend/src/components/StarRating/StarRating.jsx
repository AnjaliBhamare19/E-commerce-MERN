import React from 'react';
import Rating from '@mui/material/Rating';

const StarRating = () => {
    return (
        <>
               <Rating name="half-rating" defaultValue={0} precision={0.5}  sx = {{ color: 'rgb(79, 185, 79)'}}/>
        </>
    )
}

export default StarRating