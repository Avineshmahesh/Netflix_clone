import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow.png'
import { videoApi } from '../../components/API/VideoApi'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiDate, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })


  useEffect(()=>{
    videoApi.forEach((item)=>{
      if(item.key === id)
      {
        setApiData(item);
      }
    })
  })

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate('/')}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${id}`} frameborder="0" allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiDate.published_at}</p>
        <p>{apiDate.name}</p>
        <p>{apiDate.typeof}</p>
      </div>
    </div>
  )
}

export default Player