import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);

  return (
    <>
        <h3 className='category'>{category}</h3>
        {loading && <div><p className='animate__animated animate__flash'>Loading...</p></div>}
        <div className='card-grid'>
                {images.map(img => <GifGridItem 
                key={img.id} 
                {...img}/>)}
        </div>
    </>
  )
}
