import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL } from '../../Config'
import { API_KEY } from '../../Config'
import { IMAGE_BASE_URL } from '../../Config'
import MainImage from './Sections/MainImage'

function LandingPage() {

    const [Movies,setMovies] = useState([]);
    const [MainMovieImg,setMainMovieImg] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetch(endpoint)
        .then(res=> res.json() )
        .then(res=> {
            setMovies(res.results)
            setMainMovieImg(res.results[0])
        })
    }, [])

    return (
        <>
           <div style={{width:'100%',margin:'0'}}>
            {MainMovieImg &&
                <MainImage 
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImg.backdrop_path}`} 
                    title={MainMovieImg.title} 
                    desc={MainMovieImg.overview} 
                />    
            }
            <div style={{
                width:'85%',margin:'0 auto'
            }}>
                <h2>Movie by latest</h2>
                <hr/>
                
            </div>
            <div style={{
                width:'100%',display:'flex',justifyContent:'center',
            }}> 
                    <button>Load More</button>
            </div>
           </div>
        </>
    )
}

export default LandingPage
