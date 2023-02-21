import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);

    const {loading} = useFetchGifs();


    // useEffect( () => {
    //     getGifs(category)
    //     .then(setImages)
    // }, [category])


  return (
    <>
    <h3> {category} </h3>

        
    {loading ? 'Cargando...' : 'Data Cargada'} 
    {/* <div className='card-grid'>
        

 
            {
                images.map( img => (
                    <GifGridItem 
                    key={img.id}
                    {...img}  />
                ))
            }
    </div> */}
    </>
  )
}
