import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL } from '../../Config'
import { API_KEY } from '../../Config'
import { IMAGE_BASE_URL } from '../../Config'
import MainImage from './Sections/MainImage'
import GridCards from '../commons/GridCards'
import { Row } from 'antd'

function LandingPage() {

    const [Movies,setMovies] = useState([]);
    const [MainMovieImg,setMainMovieImg] = useState(null);
    const [currentPage,setCurrentPage] = useState(0);

    useEffect(() => {
       const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
       fetchMovies(endpoint);
    }, [])

    const fetchMovies = (endpoint) =>{
            fetch(endpoint)
            .then(res=> res.json() )
            .then(res=> {
                console.log(res)
                setMovies([...Movies, ...res.results])
                if(currentPage == 0){
                setMainMovieImg(res.results[0])
                }
                setCurrentPage(res.page)
            })
    }
    const loadMoreItems = ()=>{
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
        fetchMovies(endpoint)
    }

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
                <Row gutter={[15,15]}>
                    {Movies && Movies.map((movie, index)=>(
                        <React.Fragment key={index}>
                            <GridCards 
                                image={movie.poster_path
                                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                                    : null
                                }
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </div>
            <div style={{
                width:'100%',display:'flex',justifyContent:'center',
            }}> 
                    <button onClick={loadMoreItems}>Load More</button>
            </div>
           </div>
        </>
    )
}

export default LandingPage
