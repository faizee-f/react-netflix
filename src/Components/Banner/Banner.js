import React,{useEffect, useState} from 'react'
import './Banner.css'
import {API_KEY} from '../../constants/constants'
import axios from '../../axios'
import {baseUrl,imgUrl} from '../../constants/constants'
function Banner() {
    const [movie, setMovie] = useState()    
    useEffect(() => {
        axios.get(`trending/movie/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])

            setMovie(response.data.results[Math.floor(Math.random() * (20 + 1))])
        })
    }, [])
    return (
        
        <div className='banner' 
        style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path:""})`}}
        >
            
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : "" }</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h3 className='description'>{movie ? movie.overview : "" }</h3>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    )
}

export default Banner
