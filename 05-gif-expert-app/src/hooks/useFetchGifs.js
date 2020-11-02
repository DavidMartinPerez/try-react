import { useState, useEffect } from 'react'
import { getFechGifs } from "../shared/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setState( { data: [], loading: true } );
        getFechGifs( category ).then( (gifs) => {
            setTimeout(() => {
                setState({
                    data: gifs,
                    loading: false
                })
            }, 2000);
        })
    }, [category])

    return state;

};