import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';



export default function Rating({rating }) {
  return (
    <>
    {[...Array(5)].map((_,i)=>(

        <span >
            {rating>i ?(

                <StarIcon />
            ):(

                <StarBorderIcon />
            )}


        </span>

    ))}
    
    
    
    </>
  )
}
