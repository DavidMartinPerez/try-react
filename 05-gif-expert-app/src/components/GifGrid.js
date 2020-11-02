import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data: gifsList, loading } = useFetchGifs( category );

    const renderGifsList = () => {
        let contentDom = [];

        if( loading ) {
            contentDom = (<span>Cargando...</span>)
        } else if ( gifsList.length === 0 ) {
            contentDom = (<span>No hemos encontrado nada...</span>);
        } else {
            gifsList.map(gif => {
                return contentDom.push( (<GifGridItem key={gif.id} gif={gif} />) );
            })
        }

        return contentDom;
    }

    return (
        <>
            <h1 className="gifGrid__title animate__animated animate__fadeIn"> {category} </h1>
            <div className="gifGrid__bloque" >
                {
                    renderGifsList()
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid
