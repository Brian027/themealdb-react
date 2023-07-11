import React from 'react'
import '../styles/component_styles/card.css'

function Card({recette}) {
  return (
    <div className='gridItem'>
        <div className="overlay"></div>
        <img src={recette.strMealThumb} alt="" />
        <div className="bodyContent">
            <div className="name">
                <h1>{recette.strMeal.substring(0, 15) + "..."}</h1>
            </div>
            <div className="origin">
                <p>{recette.strArea}</p>
            </div>
            <div className="recipe">
                <p>{recette.strInstructions.substring(0, 200).toLowerCase() + "..."}</p>
            </div>
        </div>
    </div>
  )
}

export default Card