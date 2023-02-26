import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Mario Nintendo"]);

  return (
    <div className="container">
        <h2 className='animate__animated animate__tada'>GifExpertApp</h2>
        <AddCategory categories={categories} setCategories={setCategories}></AddCategory>
        <hr></hr>
        <ol>
            {
            categories.map((category) => 
            <GifGrid key = {category} category={category}/>)
            }
        </ol>
    </div>
  )
}

export default GifExpertApp;
