import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import './styles/accueil.css'
import Card from './components/Card'
import axios from 'axios'

function Accueil() {

    const [recipe, setRecipe] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [rangeValue, setRangeValue] = useState(0);
    const [sort, setSort] = useState(true)

    const getRecipe = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(function (response) {
            setRecipe(response.data.meals)
        })
    }
    useEffect(getRecipe,[searchValue])
  return (
    <div>
        <Navbar />
        <div className="sideNav">
            <div className="search">
                <input type="text" name="search" id="search"  placeholder='Rechercher' defaultValue={searchValue} onKeyUp={(e) => {
                    setSearchValue(e.target.value)
                }} />
            </div>
            <div className="range">
                <div className="formRange">
                <input type="range" name="range" id="range" onInput={(e) => {
                    setRangeValue(e.target.value)
                }} />
                <span>{rangeValue}</span>
                </div>
            </div>
            <div className="buttonTri">
                <button onClick={() => {setSort(!sort)}}>
                    {
                        sort ? "Trier de Z-A" : "Trier de A-Z"
                    }
                </button>
            </div>
        </div>
        <div className="gridContainer">
            {recipe && 
                recipe
                .sort((recette1, recette2) => {
                    if(sort){
                       return recette1.strMeal.toLowerCase().localeCompare(recette2.strMeal.toLowerCase())
                    } else {
                       return recette2.strMeal.toLowerCase().localeCompare(recette1.strMeal.toLowerCase())
                    }
                }).slice(0, rangeValue)
                .map((recette, index) => {
                    return <Card recette={recette} key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default Accueil