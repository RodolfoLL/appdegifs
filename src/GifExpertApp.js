import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['iron man','hulk','loki']);

    // const handlepus = () =>{
    //     //agrega un elemento a lista utilizando el setcategories del hook useState
    //     setcategories(cats => [...categories,'thor']);
    // }


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories= {setcategories}/>
        <hr/>
        <ol>
            {
                categories.map(cats =>{
                    return <li key={cats}>{cats}</li>
                })
            }
        </ol>
    </>
  )
}
