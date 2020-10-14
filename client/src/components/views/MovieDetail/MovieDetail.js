import React,{ useEffect,useState } from 'react'
import { API_URL } from '../../Config'
import { API_KEY } from '../../Config'
import { IMAGE_BASE_URL } from '../../Config'
import GridCards from '../commons/GridCards'
import { Row, Button } from 'antd'
import Favorite from './Favorite'
 
function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [movieInfo, setMovieInfo] = useState([])
    const [movieCast, setMovieCast] = useState([])
    const [CastToggle, setCastToggle] = useState(false)

    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        fetchMovieInfo(endpointInfo);
        fetchMovieCrew(endpointCrew)
    }, [])
    let fetchMovieInfo = (endpointInfo)=>{
        fetch(endpointInfo)
        .then((res)=>res.json())
        .then((res)=> {
            setMovieInfo(res)
        })
    }
    let fetchMovieCrew = (movieCast)=>{
        fetch(movieCast)
        .then((res)=>res.json())
        .then((res)=> {
            setMovieCast(res.cast)
        })
    }
    function castToggle(){
        setCastToggle(!CastToggle)
    }

    return (
        <>
            <div className="movie_info content_box">
                <div className="img_box">
                    <img src={`${IMAGE_BASE_URL}w200${movieInfo.poster_path}`} alt=""/>
                </div>
                <div className="txt_info">
                    <h3>{movieInfo.original_title}
                        <span>{movieInfo.release_date}</span>
                        <Favorite />                        
                    </h3>
                    <hr/>
                </div>
            </div>
            <div className="content_box" style={{textAlign:'center',marginTop:'20px'}}>
                <Button onClick={castToggle}>Cast View</Button>
            </div>
            {CastToggle && 
                <div style={{marginTop:'20px'}} className="movie_crew_info content_box">
                    <h3>CAST</h3>
                    <hr/>
                    <Row style={{marginTop:'5px',display:'flex',flexWrap:'wrap'}} gutter={[15,15]}>
                        {movieCast && movieCast.map((movieCast, index)=>(
                            <React.Fragment key={index}>
                                <GridCards
                                    image={movieCast.profile_path
                                        ? `${IMAGE_BASE_URL}w500${movieCast.profile_path}`
                                        : null
                                    }
                                    castName={movieCast.name}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                </div>
            }
            
        </>
    )
}

export default MovieDetail
