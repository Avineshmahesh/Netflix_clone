import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { moviesApi } from '../API/MoviesApi'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

  const [ApiData ,setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {moviesApi.map((card, index)=>{
          console.log(card.movieImage);
          return <Link to={`/player/${card.key}`} className="card" key={index}>
            
            <img src={card.movieImage} alt="" />
            <p>{card.movieName}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards