import React, { useState } from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>  {

    const categoriesListDefault = ['Batman', 'Daredevil', 'Ultimate Spiderman'];

    const [categories, setCategories] = useState( categoriesListDefault );

    const handleAddCategory = ( category ) => {
        setCategories( [category, ...categories] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ handleAddCategory } />
            <ol>
                {
                    categories.map( category =>  ( <GifGrid key={ category } category={category} /> )  )
                }
            </ol>
        </>
    )
}

export default GifExpertApp

